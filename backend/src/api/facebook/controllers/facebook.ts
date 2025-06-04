/**
 * Facebook controller for managing Facebook integration
 */

import { factories } from '@strapi/strapi';
import FacebookService from '../../../services/facebook';

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
  /**
   * Test Facebook connection
   */
  async testConnection(ctx) {
    try {
      const facebookService = new FacebookService();
      const result = await facebookService.testConnection();
      
      if (result.success) {
        return ctx.send({ 
          success: true,
          message: 'Facebook connection successful' 
        });
      } else {
        return ctx.send({ 
          success: false,
          message: `Facebook connection failed: ${result.error}` 
        });
      }
    } catch (error) {
      strapi.log.error('Error testing Facebook connection:', error);
      return ctx.internalServerError('Internal server error');
    }
  },

  /**
   * Get Facebook integration status
   */
  async getStatus(ctx) {
    try {
      const facebookService = new FacebookService();
      const isConfigured = facebookService.isConfigured();
      const autoPost = process.env.FACEBOOK_AUTO_POST === 'true';
      
      let connectionStatus = 'unknown';
      if (isConfigured) {
        const testResult = await facebookService.testConnection();
        connectionStatus = testResult.success ? 'connected' : 'error';
      } else {
        connectionStatus = 'not_configured';
      }
      
      return ctx.send({
        configured: isConfigured,
        autoPost: autoPost,
        connectionStatus: connectionStatus,
        appId: process.env.FACEBOOK_APP_ID ? 'configured' : 'missing',
        pageId: process.env.FACEBOOK_PAGE_ID ? 'configured' : 'missing',
        accessToken: process.env.FACEBOOK_ACCESS_TOKEN ? 'configured' : 'missing',
      });
    } catch (error) {
      strapi.log.error('Error getting Facebook status:', error);
      return ctx.internalServerError('Internal server error');
    }
  },

  /**
   * Bulk post published products to Facebook
   */
  async bulkPost(ctx) {
    try {
      const { limit = 10, offset = 0 } = ctx.query;
      
      const facebookService = new FacebookService();
      
      if (!facebookService.isConfigured()) {
        return ctx.badRequest('Facebook integration is not configured');
      }
      
      // Get published products that haven't been posted to Facebook yet
      const products = await strapi.entityService.findMany('api::product.product', {
        filters: {
          publishedAt: { $notNull: true },
          $or: [
            { facebookPostStatus: { $null: true } },
            { facebookPostStatus: 'failed' },
            { facebookPostStatus: 'pending' }
          ]
        },
        populate: ['location', 'cover', 'image'],
        start: offset,
        limit: limit,
      });
      
      const results = [];
      
      for (const product of products) {
        try {
          // Update status to pending
          await strapi.entityService.update('api::product.product', product.id, {
            data: { facebookPostStatus: 'pending' },
          });
          
          const result = await facebookService.postProduct(product);
          
          // Update product with result
          const updateData: any = {
            facebookPostStatus: result.success ? 'posted' : 'failed',
          };
          
          if (result.success && result.postId) {
            updateData.facebookPostId = result.postId;
          }
          
          await strapi.entityService.update('api::product.product', product.id, {
            data: updateData,
          });
          
          results.push({
            productId: product.id,
            productName: product.name,
            success: result.success,
            postId: result.postId,
            error: result.error,
          });
          
          // Add delay between posts to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 2000));
          
        } catch (error) {
          strapi.log.error(`Error posting product ${product.id} to Facebook:`, error);
          
          await strapi.entityService.update('api::product.product', product.id, {
            data: { facebookPostStatus: 'failed' },
          });
          
          results.push({
            productId: product.id,
            productName: product.name,
            success: false,
            error: error.message,
          });
        }
      }
      
      const successCount = results.filter(r => r.success).length;
      const failCount = results.filter(r => !r.success).length;
      
      return ctx.send({
        message: `Bulk posting completed. ${successCount} successful, ${failCount} failed.`,
        results: results,
        summary: {
          total: results.length,
          successful: successCount,
          failed: failCount,
        }
      });
      
    } catch (error) {
      strapi.log.error('Error in bulk Facebook posting:', error);
      return ctx.internalServerError('Internal server error');
    }
  },

  /**
   * Get Facebook posting statistics
   */
  async getStats(ctx) {
    try {
      const stats = await strapi.db.query('api::product.product').findMany({
        select: ['facebookPostStatus'],
        where: {
          publishedAt: { $notNull: true },
        },
      });
      
      const summary = stats.reduce((acc, product) => {
        const status = product.facebookPostStatus || 'not_posted';
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      }, {});
      
      return ctx.send({
        total: stats.length,
        breakdown: summary,
      });
    } catch (error) {
      strapi.log.error('Error getting Facebook stats:', error);
      return ctx.internalServerError('Internal server error');
    }
  },
}));