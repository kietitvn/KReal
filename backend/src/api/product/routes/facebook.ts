/**
 * Facebook routes for product
 */

export default {
  routes: [
    {
      method: 'POST',
      path: '/products/:id/post-to-facebook',
      handler: 'product.postToFacebook',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/products/test-facebook-connection',
      handler: 'product.testFacebookConnection',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};