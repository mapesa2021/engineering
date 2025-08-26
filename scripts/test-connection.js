const { Client, Databases } = require('appwrite');

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68ad54b20017909021e3');

const databases = new Databases(client);

async function testConnection() {
    console.log('🔍 Testing Appwrite Connection...');
    console.log('================================');
    
    try {
        const response = await databases.list();
        console.log('✅ Connection successful!');
        console.log(`📊 Found ${response.databases.length} databases`);
        console.log('\n🎉 Appwrite is working perfectly!');
    } catch (error) {
        console.error('❌ Connection failed:', error.message);
    }
}

testConnection();
