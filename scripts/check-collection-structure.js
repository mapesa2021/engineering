const { Client, Databases } = require('appwrite');

const APPWRITE_ENDPOINT = 'https://fra.cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID = '68ad54b20017909021e3';
const DATABASE_ID = '68ad5def002255b93f21';
const COLLECTION_ID = '68ad5e3d001fb9252d9e';

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

const databases = new Databases(client);

async function checkCollectionStructure() {
    console.log('🔍 Checking Collection Structure...');
    console.log('==================================');
    
    try {
        // Try to get collection info
        const collection = await databases.getCollection(DATABASE_ID, COLLECTION_ID);
        console.log('✅ Collection found!');
        console.log(`📝 Collection Name: ${collection.name}`);
        console.log(`🆔 Collection ID: ${collection.$id}`);
        console.log(`📊 Document Count: ${collection.$permissions.length} permissions`);
        
        console.log('\n📋 Collection Permissions:');
        collection.$permissions.forEach((perm, index) => {
            console.log(`   ${index + 1}. ${perm}`);
        });
        
        console.log('\n🎉 Collection structure is accessible!');
        
    } catch (error) {
        console.error('❌ Error accessing collection:', error.message);
        console.log('\n🔧 This suggests:');
        console.log('1. Collection ID might be incorrect');
        console.log('2. Database ID might be incorrect');
        console.log('3. Permissions might not be set correctly');
    }
}

checkCollectionStructure();
