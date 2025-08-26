const { Client, Databases } = require('appwrite');

const APPWRITE_ENDPOINT = 'https://fra.cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID = '68ad54b20017909021e3';
const DATABASE_ID = '68ad5def002255b93f21';
const COLLECTION_ID = '68ad5e3d001fb9252d9e';

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

const databases = new Databases(client);

async function testFinalConnection() {
    console.log('🔍 Testing Final Appwrite Connection...');
    console.log('=====================================');
    console.log(`Database ID: ${DATABASE_ID}`);
    console.log(`Collection ID: ${COLLECTION_ID}`);
    console.log('');

    try {
        const documentsResponse = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
        console.log(`✅ Successfully connected! Found ${documentsResponse.documents.length} documents`);
        console.log('\n🎉 Appwrite is working perfectly!');
        console.log('\n📋 Your website is now connected to Appwrite!');
        console.log('🌐 Website: http://localhost:3000');
        console.log('🔧 Admin: http://localhost:3000/admin');
        console.log('\n🚀 You now have professional multi-browser database access!');
    } catch (error) {
        console.error('❌ Connection failed:', error.message);
        console.log('\n🔧 Troubleshooting:');
        console.log('1. Check if the collection permissions allow read access');
        console.log('2. Make sure the collection exists in your database');
        console.log('3. Verify the collection ID is correct');
    }
}

testFinalConnection();
