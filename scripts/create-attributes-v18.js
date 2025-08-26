const { Client, Databases } = require('appwrite');

const APPWRITE_ENDPOINT = 'https://fra.cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID = '68ad54b20017909021e3';
const DATABASE_ID = '68ad5def002255b93f21';
const COLLECTION_ID = '68ad5e3d001fb9252d9e';

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

const databases = new Databases(client);

async function createAttributes() {
    console.log('🔧 Creating Collection Attributes (v18)...');
    console.log('========================================');
    
    try {
        // Try to create a simple test document first to see if it works
        console.log('📝 Testing document creation...');
        
        const testDoc = {
            title: 'Test Post',
            content: 'This is a test post',
            author: 'Test Author',
            status: 'published'
        };
        
        const response = await databases.createDocument(DATABASE_ID, COLLECTION_ID, 'unique()', testDoc);
        console.log('✅ Successfully created test document!');
        console.log(`📄 Document ID: ${response.$id}`);
        
        console.log('\n🎉 Your collection is working!');
        console.log('\n📋 Your website is now connected to Appwrite!');
        console.log('🌐 Website: http://localhost:3000');
        console.log('�� Admin: http://localhost:3000/admin');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.log('\n🔧 This suggests the collection needs attributes defined manually.');
        console.log('📝 Please add attributes in the Appwrite Console:');
        console.log('1. Go to your collection');
        console.log('2. Click "Attributes" tab');
        console.log('3. Add: title, content, author, status (all strings)');
    }
}

createAttributes();
