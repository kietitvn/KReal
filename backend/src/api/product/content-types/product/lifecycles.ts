/**
 * Product lifecycle hooks
 */

import FacebookService from '../../../../services/facebook';

export default {
  /**
   * Called after a product is updated
   */
  async afterUpdate(event) {
    const { result, params } = event;
    
    // Check if auto-posting is enabled
    const autoPost = process.env.FACEBOOK_AUTO_POST === 'true';
    if (!autoPost) return;
    
    // Check if the product was just published
    const wasJustPublished = result.publishedAt && params.data.publishedAt;
    
    if (wasJustPublished) {
      // Get the full product data with relations
      const fullProduct = await strapi.entityService.findOne('api::product.product', result.id, {
        populate: ['location', 'cover', 'image'],
      });
      
      if (fullProduct) {
        await postProductToFacebook(fullProduct);
      }
    }
  },

  /**
   * Called after a product is created and published
   */
  async afterCreate(event) {
    const { result } = event;
    
    // Check if auto-posting is enabled
    const autoPost = process.env.FACEBOOK_AUTO_POST === 'true';
    if (!autoPost) return;
    
    // Check if the product was created as published
    if (result.publishedAt) {
      // Get the full product data with relations
      const fullProduct = await strapi.entityService.findOne('api::product.product', result.id, {
        populate: ['location', 'cover', 'image'],
      });
      
      if (fullProduct) {
        await postProductToFacebook(fullProduct);
      }
    }
  },
};

/**
 * Helper function to post product to Facebook
 */
async function postProductToFacebook(product) {
  try {
    const facebookService = new FacebookService();
    
    if (!facebookService.isConfigured()) {
      strapi.log.warn('Facebook integration is not configured');
      return;
    }
    
    // Update product status to pending
    await strapi.entityService.update('api::product.product', product.id, {
      data: {
        facebookPostStatus: 'pending',
      },
    });
    
    // Prepare product data for Facebook
    const productForFacebook = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      status: product.status,
      bedRoom: product.bedRoom,
      bathRoom: product.bathRoom,
      location: product.location,
      cover: product.cover,
      image: product.image,
      slug: product.slug,
    };
    
    const result = await facebookService.postProduct(productForFacebook);
    
    // Update product with Facebook post result
    const updateData: any = {
      facebookPostStatus: result.success ? 'posted' : 'failed',
    };
    
    if (result.success && result.postId) {
      updateData.facebookPostId = result.postId;
    }
    
    await strapi.entityService.update('api::product.product', product.id, {
      data: updateData,
    });
    
    if (result.success) {
      strapi.log.info(`Product ${product.id} successfully posted to Facebook with post ID: ${result.postId}`);
    } else {
      strapi.log.error(`Failed to post product ${product.id} to Facebook: ${result.error}`);
    }
  } catch (error) {
    strapi.log.error('Error in Facebook lifecycle hook:', error);
    
    // Update product status to failed
    await strapi.entityService.update('api::product.product', product.id, {
      data: {
        facebookPostStatus: 'failed',
      },
    });
  }
}