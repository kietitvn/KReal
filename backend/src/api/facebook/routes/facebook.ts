/**
 * Facebook management routes
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/facebook/test-connection',
      handler: 'facebook.testConnection',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/facebook/status',
      handler: 'facebook.getStatus',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/facebook/bulk-post',
      handler: 'facebook.bulkPost',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/facebook/stats',
      handler: 'facebook.getStats',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};