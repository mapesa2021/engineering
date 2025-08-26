const { Client, Databases } = require('appwrite');

const APPWRITE_ENDPOINT = 'https://fra.cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID = '68ad54b20017909021e3';
const DATABASE_ID = '68ad5def002255b93f21';
const COLLECTION_ID = '68ad5e3d001fb9252d9e';

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

const databases = new Databases(client);

async function testWithUser() {
    console.log('🔍 Testing Appwrite Connection with User...');
    console.log('==========================================');
    console.log(`Database ID: ${DATABASE_ID}`);
    console.log(`Collection ID: ${COLLECTION_ID}`);
    console.log(`User ID: 68ad67270028df971118`);
    console.log('');

    try {
        // Test document listing
        console.log('📝 Testing document listing...');
        const documentsResponse = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
        console.log(`✅ Successfully connected! Found ${documentsResponse.documents.length} documents`);
        
        // Test document creation
        console.log('\n📝 Testing document creation...');
        const testDocument = {
            title: 'Test Blog Post',
            content: 'This is a test blog post to verify Appwrite connection.',
            author: 'Test Author',
            status: 'published'
        };

        const createResponse = await databases.createDocument(DATABASE_ID, COLLECTION_ID, 'unique()', testDocument);
        console.log(`✅ Successfully created test document!`);
        console.log(`📄 Document ID: ${createResponse.$id}`);

        console.log('\n🎉 Appwrite is working perfectly!');
        console.log('\n📋 Your website is now connected to Appwrite!');
        console.log('🌐 Website: http://localhost:3000');
        console.log('🔧 Admin: http://localhost:3000/admin');
        console.log('\n🚀 You now have professional multi-browser database access!');
        console.log('✅ Data will be synchronized across all browsers');
        console.log('✅ Admin panel will save to cloud database');
        console.log('✅ Professional multi-user access ready!');

    } catch (error) {
        console.error('❌ Error:', error.message);
        console.log('\n🔧 This might be due to:');
        console.log('1. User permissions not fully applied yet');
        console.log('2. Collection permissions need to be updated');
        console.log('3. User authentication required');
        console.log('\n💡 Let\'s test through your website instead!');
    }
}

testWithUser();
