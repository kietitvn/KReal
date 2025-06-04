/**
 * product controller
 */

import { factories } from '@strapi/strapi';
import FacebookService from '../../../services/facebook';

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
  /**
   * Create a product and optionally post to Facebook
   */
  async create(ctx) {
    const response = await super.create(ctx);
    
    // Check if auto-posting to Facebook is enabled
    const autoPost = process.env.FACEBOOK_AUTO_POST === 'true';
    
    if (autoPost && response.data) {
      await this.postProductToFacebook(response.data);
    }
    
    return response;
  },

  /**
   * Update a product and handle Facebook posting based on publish status
   */
  async update(ctx) {
    const { id } = ctx.params;
    const { data } = ctx.request.body;
    
    // Get the current product to check previous publish status
    const currentProduct = await strapi.entityService.findOne('api::product.product', id, {
      populate: ['location', 'cover', 'image'],
    });
    
    const response = await super.update(ctx);
    
    // Check if the product was just published
    const wasUnpublished = !currentProduct?.publishedAt;
    const isNowPublished = response.data?.attributes?.publishedAt;
    const autoPost = process.env.FACEBOOK_AUTO_POST === 'true';
    
    if (autoPost && wasUnpublished && isNowPublished) {
      await this.postProductToFacebook(response.data);
    }
    
    return response;
  },

  /**
   * Manually post a product to Facebook
   */
  async postToFacebook(ctx) {
    const { id } = ctx.params;
    
    try {
      const product = await strapi.entityService.findOne('api::product.product', id, {
        populate: ['location', 'cover', 'image'],
      });
      
      if (!product) {
        return ctx.notFound('Product not found');
      }
      
      if (!product.publishedAt) {
        return ctx.badRequest('Product must be published before posting to Facebook');
      }
      
      const result = await this.postProductToFacebook(product);
      
      if (result.success) {
        return ctx.send({
          message: 'Product posted to Facebook successfully',
          postId: result.postId,
        });
      } else {
        return ctx.badRequest(`Failed to post to Facebook: ${result.error}`);
      }
    } catch (error) {
      strapi.log.error('Error in postToFacebook controller:', error);
      return ctx.internalServerError('Internal server error');
    }
  },

  /**
   * Test Facebook connection
   */
  async testFacebookConnection(ctx) {
    try {
      const facebookService = new FacebookService();
      const result = await facebookService.testConnection();
      
      if (result.success) {
        return ctx.send({ message: 'Facebook connection successful' });
      } else {
        return ctx.badRequest(`Facebook connection failed: ${result.error}`);
      }
    } catch (error) {
      strapi.log.error('Error testing Facebook connection:', error);
      return ctx.internalServerError('Internal server error');
    }
  },

  /**
   * Helper method to post product to Facebook
   */
  async postProductToFacebook(productData) {
    try {
      const facebookService = new FacebookService();
      
      if (!facebookService.isConfigured()) {
        strapi.log.warn('Facebook integration is not configured');
        return { success: false, error: 'Facebook integration not configured' };
      }
      
      // Update product status to pending
      await strapi.entityService.update('api::product.product', productData.id, {
        data: {
          facebookPostStatus: 'pending',
        },
      });
      
      // Prepare product data for Facebook
      const productForFacebook = {
        id: productData.id,
        name: productData.attributes?.name || productData.name,
        description: productData.attributes?.description || productData.description,
        price: productData.attributes?.price || productData.price,
        status: productData.attributes?.status || productData.status,
        bedRoom: productData.attributes?.bedRoom || productData.bedRoom,
        bathRoom: productData.attributes?.bathRoom || productData.bathRoom,
        location: productData.attributes?.location || productData.location,
        cover: productData.attributes?.cover || productData.cover,
        image: productData.attributes?.image || productData.image,
        slug: productData.attributes?.slug || productData.slug,
      };
      
      const result = await facebookService.postProduct(productForFacebook);
      
      // Update product with Facebook post result
      const updateData: any = {
        facebookPostStatus: result.success ? 'posted' : 'failed',
      };
      
      if (result.success && result.postId) {
        updateData.facebookPostId = result.postId;
      }
      
      await strapi.entityService.update('api::product.product', productData.id, {
        data: updateData,
      });
      
      return result;
    } catch (error) {
      strapi.log.error('Error posting product to Facebook:', error);
      
      // Update product status to failed
      await strapi.entityService.update('api::product.product', productData.id, {
        data: {
          facebookPostStatus: 'failed',
        },
      });
      
      return { success: false, error: error.message };
    }
  },
}));
