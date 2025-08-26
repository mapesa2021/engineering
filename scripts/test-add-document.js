const { Client, Databases } = require('appwrite');

const APPWRITE_ENDPOINT = 'https://fra.cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID = '68ad54b20017909021e3';
const DATABASE_ID = '68ad5def002255b93f21';
const COLLECTION_ID = '68ad5e3d001fb9252d9e';

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

const databases = new Databases(client);

async function testAddDocument() {
    console.log('🔍 Testing Document Creation...');
    console.log('==============================');
    
    try {
        const testDocument = {
            title: 'Test Blog Post',
            content: 'This is a test blog post to verify Appwrite connection.',
            author: 'Test Author',
            status: 'published'
        };

        console.log('📝 Attempting to create test document...');
        const response = await databases.createDocument(DATABASE_ID, COLLECTION_ID, 'unique()', testDocument);
        
        console.log('✅ Successfully created test document!');
        console.log(`📄 Document ID: ${response.$id}`);
        console.log('\n🎉 Appwrite is working perfectly!');
        console.log('\n📋 Your website is now connected to Appwrite!');
        console.log('🌐 Website: http://localhost:3000');
        console.log('🔧 Admin: http://localhost:3000/admin');
        console.log('\n🚀 You now have professional multi-browser database access!');

    } catch (error) {
        console.error('❌ Error creating document:', error.message);
        console.log('\n🔧 This might be due to:');
        console.log('1. Collection attributes not matching the document structure');
        console.log('2. Permissions not fully applied yet');
        console.log('3. Collection ID might be incorrect');
        console.log('\n💡 Let\'s test through your website instead!');
    }
}

testAddDocument();
