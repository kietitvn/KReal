/**
 * Facebook service for posting products to Facebook Page
 */

import axios from 'axios';

interface ProductData {
  id: number;
  name: string;
  description?: string;
  price: number;
  status: string;
  bedRoom?: number;
  bathRoom?: number;
  location?: any;
  cover?: any;
  image?: any[];
  slug?: string;
}

interface FacebookPostData {
  message: string;
  link?: string;
  picture?: string;
  name?: string;
  caption?: string;
  description?: string;
}

class FacebookService {
  private accessToken: string;
  private pageId: string;
  private appId: string;
  private appSecret: string;
  private baseUrl: string = 'https://graph.facebook.com/v18.0';

  constructor() {
    this.accessToken = process.env.FACEBOOK_ACCESS_TOKEN || '';
    this.pageId = process.env.FACEBOOK_PAGE_ID || '';
    this.appId = process.env.FACEBOOK_APP_ID || '';
    this.appSecret = process.env.FACEBOOK_APP_SECRET || '';
  }

  /**
   * Check if Facebook integration is properly configured
   */
  isConfigured(): boolean {
    return !!(this.accessToken && this.pageId && this.appId && this.appSecret);
  }

  /**
   * Format product data for Facebook post
   */
  private formatProductMessage(product: ProductData): string {
    const statusText = product.status === 'Bán' ? 'Bán' : 'Cho Thuê';
    // const priceFormatted = new Intl.NumberFormat('vi-VN', {
    //   style: 'currency',
    //   currency: 'VND'
    // }).format(product.price);

    let message = "";// let message = `🏠 ${statusText}: ${product.name}\n\n`;
    // message += `💰 Price: ${priceFormatted}\n`;
    
    // if (product.bedRoom) {
    //   message += `🛏️ Bedrooms: ${product.bedRoom}\n`;
    // }
    
    // if (product.bathRoom) {
    //   message += `🚿 Bathrooms: ${product.bathRoom}\n`;
    // }
    
    // if (product.location?.attributes?.name) {
    //   message += `📍 Location: ${product.location.attributes.name}\n`;
    // }
    
    if (product.description) {
      // Strip HTML tags and limit description length
      const plainDescription = product.description.replace(/<[^>]*>/g, '');
      // const shortDescription = plainDescription.length > 200 
      //   ? plainDescription.substring(0, 200) + '...' 
      //   : plainDescription;
      // message += `\n${shortDescription}\n`;
      message += plainDescription;
    }
    
    message += `\n#${statusText.replace(' ', '')} #${product.location?.name}`;
    return message;
  }
  /**
   * Get multiple image URLs from product (max 10)
   */
  private getProductImages(product: ProductData): string[] {
    const images: string[] = [];
    
    // Add cover image first if available
    // if (product.cover?.data?.attributes?.url) {
    //   const url = product.cover.data.attributes.url;
    //   if (url.startsWith('/')) {
    //     images.push(`${process.env.HOST || 'http://localhost:1337'}${url}`);
    //   } else {
    //     images.push(url);
    //   }
    // }
    
    // Add other images from the image array
    if (product.image && Array.isArray(product.image)) {
      for (const img of product.image.slice(0, 10)) {
        // if (images.length >= 10) break; // Facebook allows max 10 images
        
        if (img.url) {
          const url = img.url;
          const fullUrl = url.startsWith('/') 
            ? `${process.env.HOST || 'http://localhost:1337'}${url}` 
            : url;
          
          // Avoid duplicates
          if (!images.includes(fullUrl)) {
            images.push(fullUrl);
          }
        }
      }
    }
    
    // Fallback to imageUrl array if available
    // if (images.length === 0 && product.image && Array.isArray(product.image)) {
    //   for (const img of product.image) {
    //     if (images.length >= 10) break;
        
    //     if (img.url) {
    //       const fullUrl = img.url.startsWith('/') 
    //         ? `${process.env.HOST || 'http://localhost:1337'}${img.url}` 
    //         : img.url;
          
    //       if (!images.includes(fullUrl)) {
    //         images.push(fullUrl);
    //       }
    //     }
    //   }
    // }
    
    return images;
  }

  /**
   * Post multiple photos as an album to Facebook Page
   */
  async postPhotoAlbum(images: string[], message: string): Promise<{ success: boolean; postId?: string; error?: string }> {
    try {
      if (!this.isConfigured()) {
        throw new Error('Facebook integration is not properly configured');
      }

      if (images.length === 0) {
        throw new Error('No images provided for album');
      }

      // For single image, use simple photo post
      if (images.length === 1) {
        const response = await axios.post(
          `${this.baseUrl}/${this.pageId}/photos`,
          {
            url: images[0],
            caption: message,
          },
          {
            params: {
              access_token: this.accessToken,
            },
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        return {
          success: true,
          postId: response.data.id,
        };
      }

      // For multiple images, create a batch post
      const attachedMedia = [];
      
      // Upload each image first and get media IDs
      for (const imageUrl of images.slice(0, 10)) { // Max 10 images
        try {
          const uploadResponse = await axios.post(
            `${this.baseUrl}/${this.pageId}/photos`,
            {
              url: imageUrl,
              published: false, // Don't publish yet, just upload
            },
            {
              params: {
                access_token: this.accessToken,
              },
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          
          if (uploadResponse.data.id) {
            attachedMedia.push({
              media_fbid: uploadResponse.data.id
            });
          }
        } catch (error) {
          strapi.log.warn(`Failed to upload image ${imageUrl}:`, error.response?.data || error.message);
          // Continue with other images
        }
      }

      if (attachedMedia.length === 0) {
        throw new Error('Failed to upload any images');
      }

      // Create the post with attached media
      const response = await axios.post(
        `${this.baseUrl}/${this.pageId}/feed`,
        {
          message: message,
          attached_media: attachedMedia,
        },
        {
          params: {
            access_token: this.accessToken,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.id) {
        strapi.log.info(`Successfully posted photo album to Facebook. Post ID: ${response.data.id}`);
        return {
          success: true,
          postId: response.data.id,
        };
      } else {
        throw new Error('No post ID returned from Facebook');
      }
    } catch (error: any) {
      strapi.log.error('Error posting photo album to Facebook:', error.response?.data || error.message);
      return {
        success: false,
        error: error.response?.data?.error?.message || error.message,
      };
    }
  }

  /**
   * Post a product to Facebook Page
   */
  async postProduct(product: ProductData): Promise<{ success: boolean; postId?: string; error?: string }> {
    try {
      if (!this.isConfigured()) {
        throw new Error('Facebook integration is not properly configured');
      }

      const message = this.formatProductMessage(product);
      // console.log(product);
      // return;
      const images = this.getProductImages(product);
      
      // If we have images, post as photo album for better engagement
      // if (images.length > 0) {
        let photoMessage = message;
        
        // Add product link to the message if slug is available
        if (product.slug) {
          const productLink = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/${product.slug}?id=${product.id}`;
          photoMessage += `\n\n🔗 View details: ${productLink}`;
        }
        
        return await this.postPhotoAlbum(images, photoMessage);
      // }
      return;
      // Fallback to regular text post if no images
      const postData: FacebookPostData = {
        message: message,
      };

      // Add product link if slug is available
      if (product.slug) {
        postData.link = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/${product.slug}?id=${product.id}`;
      }

      const response = await axios.post(
        `${this.baseUrl}/${this.pageId}/feed`,
        postData,
        {
          params: {
            access_token: this.accessToken,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.id) {
        strapi.log.info(`Successfully posted product ${product.id} to Facebook. Post ID: ${response.data.id}`);
        return {
          success: true,
          postId: response.data.id,
        };
      } else {
        throw new Error('No post ID returned from Facebook');
      }
    } catch (error: any) {
      strapi.log.error('Error posting to Facebook:', error.response?.data || error.message);
      return {
        success: false,
        error: error.response?.data?.error?.message || error.message,
      };
    }
  }

  /**
   * Test Facebook connection
   */
  async testConnection(): Promise<{ success: boolean; error?: string }> {
    try {
      if (!this.isConfigured()) {
        throw new Error('Facebook integration is not properly configured');
      }

      const response = await axios.get(
        `${this.baseUrl}/${this.pageId}`,
        {
          params: {
            access_token: this.accessToken,
            fields: 'id,name',
          },
        }
      );

      if (response.data.id) {
        return { success: true };
      } else {
        throw new Error('Invalid response from Facebook');
      }
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.error?.message || error.message,
      };
    }
  }

  /**
   * Delete a Facebook post
   */
  async deletePost(postId: string): Promise<{ success: boolean; error?: string }> {
    try {
      if (!this.isConfigured()) {
        throw new Error('Facebook integration is not properly configured');
      }

      await axios.delete(
        `${this.baseUrl}/${postId}`,
        {
          params: {
            access_token: this.accessToken,
          },
        }
      );

      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.error?.message || error.message,
      };
    }
  }
}

export default FacebookService;