/**
 * Test script for Facebook integration
 * Run with: node scripts/test-facebook.js
 */

require('dotenv').config();

// Mock Strapi log for testing
global.strapi = {
  log: {
    info: console.log,
    error: console.error,
    warn: console.warn,
  }
};

const FacebookService = require('../src/services/facebook').default;

async function testFacebookIntegration() {
  console.log('🧪 Testing Facebook Integration...\n');
  
  // Check configuration
  console.log('📋 Configuration Check:');
  console.log('FACEBOOK_APP_ID:', process.env.FACEBOOK_APP_ID ? '✅ Set' : '❌ Missing');
  console.log('FACEBOOK_APP_SECRET:', process.env.FACEBOOK_APP_SECRET ? '✅ Set' : '❌ Missing');
  console.log('FACEBOOK_ACCESS_TOKEN:', process.env.FACEBOOK_ACCESS_TOKEN ? '✅ Set' : '❌ Missing');
  console.log('FACEBOOK_PAGE_ID:', process.env.FACEBOOK_PAGE_ID ? '✅ Set' : '❌ Missing');
  console.log('FACEBOOK_AUTO_POST:', process.env.FACEBOOK_AUTO_POST || 'false');
  console.log('');
  
  const facebookService = new FacebookService();
  
  // Test connection
  console.log('🔗 Testing Facebook Connection...');
  const connectionResult = await facebookService.testConnection();
  
  if (connectionResult.success) {
    console.log('✅ Facebook connection successful!');
  } else {
    console.log('❌ Facebook connection failed:', connectionResult.error);
    return;
  }
  
  console.log('');
  
  // Test posting (with mock data)
  console.log('📝 Testing Product Post...');
  
  const mockProduct = {
    id: 999,
    name: 'Test Luxury Villa',
    description: 'Beautiful test villa with amazing views and modern amenities. Perfect for testing Facebook integration.',
    price: 15000000000, // 15 billion VND
    status: 'Bán',
    bedRoom: 4,
    bathRoom: 3,
    location: {
      attributes: {
        name: 'Ho Chi Minh City, Vietnam'
      }
    },
    cover: null,
    image: null,
    slug: 'test-luxury-villa'
  };
  
  const postResult = await facebookService.postProduct(mockProduct);
  
  if (postResult.success) {
    console.log('✅ Test post successful!');
    console.log('📌 Post ID:', postResult.postId);
    
    // Optionally delete the test post
    console.log('');
    console.log('🗑️ Cleaning up test post...');
    const deleteResult = await facebookService.deletePost(postResult.postId);
    
    if (deleteResult.success) {
      console.log('✅ Test post deleted successfully!');
    } else {
      console.log('⚠️ Could not delete test post:', deleteResult.error);
      console.log('Please manually delete post ID:', postResult.postId);
    }
  } else {
    console.log('❌ Test post failed:', postResult.error);
  }
  
  console.log('');
  console.log('🎉 Facebook integration test completed!');
}

// Run the test
testFacebookIntegration().catch(console.error);