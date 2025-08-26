const { Client, Databases } = require('appwrite');

const APPWRITE_ENDPOINT = 'https://fra.cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID = '68ad54b20017909021e3';
const DATABASE_ID = 'ENGINEEREING-OLERUM';
const COLLECTION_ID = '68ad5e3d001fb9252d9e';

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

const databases = new Databases(client);

async function testRealConnection() {
    console.log('🔍 Testing Real Appwrite Connection...');
    console.log('=====================================');
    console.log(`Database ID: ${DATABASE_ID}`);
    console.log(`Collection ID: ${COLLECTION_ID}`);
    console.log('');

    try {
        const documentsResponse = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
        console.log(`✅ Successfully connected! Found ${documentsResponse.documents.length} documents`);
        console.log('\n🎉 Appwrite is working perfectly!');
        console.log('\n📋 Your website is ready to use Appwrite!');
        console.log('🌐 Website: http://localhost:3000');
        console.log('🔧 Admin: http://localhost:3000/admin');
    } catch (error) {
        console.error('❌ Connection failed:', error.message);
        console.log('\n🔧 Troubleshooting:');
        console.log('1. Check if the collection ID is correct');
        console.log('2. Verify permissions are set to allow read access');
        console.log('3. Make sure the collection exists in your database');
    }
}

testRealConnection();
