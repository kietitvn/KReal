# Facebook Integration for Product Publishing

This integration allows automatic posting of real estate products to a Facebook Page when they are published in the Strapi admin panel.

## Features

- ✅ Automatic posting to Facebook when products are published
- ✅ Manual posting via API endpoint
- ✅ Rich product information formatting
- ✅ Image attachment support
- ✅ Product link inclusion
- ✅ Post status tracking
- ✅ Error handling and logging
- ✅ Facebook connection testing

## Setup Instructions

### 1. Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app or use an existing one
3. Add the "Pages" product to your app
4. Note down your App ID and App Secret

### 2. Get Page Access Token

1. Go to Graph API Explorer: https://developers.facebook.com/tools/explorer/
2. Select your app
3. Generate a User Access Token with `pages_manage_posts` and `pages_read_engagement` permissions
4. Use the token to get your Page ID and long-lived Page Access Token:

```bash
# Get your pages
curl -X GET "https://graph.facebook.com/v18.0/me/accounts?access_token=YOUR_USER_ACCESS_TOKEN"

# Get long-lived page access token
curl -X GET "https://graph.facebook.com/v18.0/oauth/access_token?grant_type=fb_exchange_token&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&fb_exchange_token=YOUR_PAGE_ACCESS_TOKEN"
```

### 3. Configure Environment Variables

Add the following variables to your `.env` file:

```env
# Facebook Integration
FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_APP_SECRET=your_facebook_app_secret
FACEBOOK_ACCESS_TOKEN=your_long_lived_page_access_token
FACEBOOK_PAGE_ID=your_facebook_page_id
FACEBOOK_AUTO_POST=true
FRONTEND_URL=http://localhost:3000
```

### 4. Test the Integration

You can test the Facebook connection using the API endpoint:

```bash
curl -X GET "http://localhost:1337/api/products/test-facebook-connection"
```

## Usage

### Automatic Posting

When `FACEBOOK_AUTO_POST=true`, products will be automatically posted to Facebook when:
- A new product is created and published
- An existing product is published (draft → published)

### Manual Posting

You can manually post a specific product to Facebook:

```bash
curl -X POST "http://localhost:1337/api/products/{product_id}/post-to-facebook"
```

### Product Schema Updates

The product schema now includes:
- `facebookPostId`: Stores the Facebook post ID
- `facebookPostStatus`: Tracks posting status (pending, posted, failed, disabled)

## Post Format

The Facebook post includes:
- 🏠 Property status (FOR SALE/FOR RENT)
- 💰 Formatted price in VND
- 🛏️ Number of bedrooms
- 🚿 Number of bathrooms
- 📍 Location information
- Property description (truncated)
- Relevant hashtags
- Cover image (if available)
- Link to product detail page

## Error Handling

- Failed posts are logged and the product status is updated to "failed"
- Products can be manually retried
- Connection issues are gracefully handled
- Detailed error messages are provided

## API Endpoints

### Test Facebook Connection
```
GET /api/products/test-facebook-connection
```

### Post Product to Facebook
```
POST /api/products/:id/post-to-facebook
```

## Troubleshooting

### Common Issues

1. **"Facebook integration is not properly configured"**
   - Check that all environment variables are set
   - Verify your access token is valid

2. **"Invalid access token"**
   - Your access token may have expired
   - Generate a new long-lived token

3. **"Insufficient permissions"**
   - Ensure your access token has `pages_manage_posts` permission
   - Check that you're an admin of the Facebook page

4. **"Product must be published before posting to Facebook"**
   - Only published products can be posted to Facebook
   - Publish the product first, then try posting

### Debug Mode

Enable debug logging by setting the log level in your Strapi configuration:

```javascript
// config/logger.js
module.exports = {
  level: 'debug',
};
```

## Security Notes

- Keep your Facebook App Secret secure
- Use long-lived page access tokens
- Regularly rotate your access tokens
- Monitor your Facebook app for any suspicious activity
- Consider implementing rate limiting for manual posting endpoints

## Facebook API Limits

- Facebook has rate limits for posting
- Avoid posting too frequently to prevent being rate limited
- The integration includes error handling for rate limit responses