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
   * Get the cover image URL for the product
   */
  private getCoverImageUrl(product: ProductData): string | null {
    if (product.cover?.data?.attributes?.url) {
      const url = product.cover.data.attributes.url;
      // If it's a relative URL, make it absolute
      if (url.startsWith('/')) {
        return `${process.env.HOST || 'http://localhost:1337'}${url}`;
      }
      return url;
    }
    
    // Fallback to first image if no cover
    if (product.image?.[0]?.url) {
      const url = product.image?.[0]?.url;
      if (url.startsWith('/')) {
        return `${process.env.HOST || 'http://localhost:1337'}${url}`;
      }
      return url;
    }
    
    return null;
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
      const imageUrl = this.getCoverImageUrl(product);
      
      const postData: FacebookPostData = {
        message: message,
      };

      // Add image if available
      // if (imageUrl) {
      //   postData.picture = imageUrl;
      // }

      // Add product link if slug is available
      if (product.slug) {
        postData.link = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/${product.slug}?id=${product.id}`;
        // postData.name = product.name;
        // postData.caption = 'View full details';
        // postData.description = product.description?.replace(/<[^>]*>/g, '').substring(0, 300) || '';
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