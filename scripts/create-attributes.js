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
    console.log('🔧 Creating Collection Attributes...');
    console.log('===================================');
    
    const attributes = [
        { key: 'title', type: 'string', required: true, size: 256 },
        { key: 'content', type: 'string', required: true, size: 65536 },
        { key: 'author', type: 'string', required: true, size: 100 },
        { key: 'status', type: 'string', required: true, size: 20 },
        { key: 'excerpt', type: 'string', required: false, size: 1000 },
        { key: 'image', type: 'string', required: false, size: 500 },
        { key: 'date', type: 'datetime', required: false }
    ];

    for (const attr of attributes) {
        try {
            console.log(`📝 Creating attribute: ${attr.key}...`);
            
            if (attr.type === 'string') {
                await databases.createStringAttribute(
                    DATABASE_ID,
                    COLLECTION_ID,
                    attr.key,
                    attr.size,
                    attr.required
                );
            } else if (attr.type === 'datetime') {
                await databases.createDatetimeAttribute(
                    DATABASE_ID,
                    COLLECTION_ID,
                    attr.key,
                    attr.required
                );
            }
            
            console.log(`✅ Created attribute: ${attr.key}`);
            
        } catch (error) {
            if (error.code === 409) {
                console.log(`ℹ️  Attribute ${attr.key} already exists`);
            } else {
                console.log(`❌ Error creating ${attr.key}:`, error.message);
            }
        }
    }

    console.log('\n🎉 Attribute creation completed!');
    console.log('\n📋 Test your website at: http://localhost:3000');
}

createAttributes();
