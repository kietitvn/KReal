"use strict";
/**
 * product controller
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
const facebook_1 = __importDefault(require("../../../services/facebook"));
exports.default = strapi_1.factories.createCoreController('api::product.product', ({ strapi }) => ({
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
        var _a, _b;
        const { id } = ctx.params;
        const { data } = ctx.request.body;
        // Get the current product to check previous publish status
        const currentProduct = await strapi.entityService.findOne('api::product.product', id, {
            populate: ['location', 'cover', 'image'],
        });
        const response = await super.update(ctx);
        // Check if the product was just published
        const wasUnpublished = !(currentProduct === null || currentProduct === void 0 ? void 0 : currentProduct.publishedAt);
        const isNowPublished = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.publishedAt;
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
            }
            else {
                return ctx.badRequest(`Failed to post to Facebook: ${result.error}`);
            }
        }
        catch (error) {
            strapi.log.error('Error in postToFacebook controller:', error);
            return ctx.internalServerError('Internal server error');
        }
    },
    /**
     * Test Facebook connection
     */
    async testFacebookConnection(ctx) {
        try {
            const facebookService = new facebook_1.default();
            const result = await facebookService.testConnection();
            if (result.success) {
                return ctx.send({ message: 'Facebook connection successful' });
            }
            else {
                return ctx.badRequest(`Facebook connection failed: ${result.error}`);
            }
        }
        catch (error) {
            strapi.log.error('Error testing Facebook connection:', error);
            return ctx.internalServerError('Internal server error');
        }
    },
    /**
     * Helper method to post product to Facebook
     */
    async postProductToFacebook(productData) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        try {
            const facebookService = new facebook_1.default();
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
                name: ((_a = productData.attributes) === null || _a === void 0 ? void 0 : _a.name) || productData.name,
                description: ((_b = productData.attributes) === null || _b === void 0 ? void 0 : _b.description) || productData.description,
                price: ((_c = productData.attributes) === null || _c === void 0 ? void 0 : _c.price) || productData.price,
                status: ((_d = productData.attributes) === null || _d === void 0 ? void 0 : _d.status) || productData.status,
                bedRoom: ((_e = productData.attributes) === null || _e === void 0 ? void 0 : _e.bedRoom) || productData.bedRoom,
                bathRoom: ((_f = productData.attributes) === null || _f === void 0 ? void 0 : _f.bathRoom) || productData.bathRoom,
                location: ((_g = productData.attributes) === null || _g === void 0 ? void 0 : _g.location) || productData.location,
                cover: ((_h = productData.attributes) === null || _h === void 0 ? void 0 : _h.cover) || productData.cover,
                image: ((_j = productData.attributes) === null || _j === void 0 ? void 0 : _j.image) || productData.image,
                slug: ((_k = productData.attributes) === null || _k === void 0 ? void 0 : _k.slug) || productData.slug,
            };
            const result = await facebookService.postProduct(productForFacebook);
            // Update product with Facebook post result
            const updateData = {
                facebookPostStatus: result.success ? 'posted' : 'failed',
            };
            if (result.success && result.postId) {
                updateData.facebookPostId = result.postId;
            }
            await strapi.entityService.update('api::product.product', productData.id, {
                data: updateData,
            });
            return result;
        }
        catch (error) {
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
