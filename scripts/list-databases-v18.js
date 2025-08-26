const { Client, Databases } = require('appwrite');

const APPWRITE_ENDPOINT = 'https://fra.cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID = '68ad54b20017909021e3';

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

const databases = new Databases(client);

async function listDatabases() {
    console.log('🔍 Listing all databases...');
    console.log('==========================');
    
    try {
        const response = await databases.list();
        console.log(`✅ Found ${response.databases.length} databases:`);
        console.log('');
        
        response.databases.forEach((db, index) => {
            console.log(`${index + 1}. Name: "${db.name}"`);
            console.log(`   ID: ${db.$id}`);
            console.log(`   Created: ${db.$createdAt}`);
            console.log('');
        });
        
        console.log('📋 Copy the correct Database ID and update the configuration');
        
    } catch (error) {
        console.error('❌ Error listing databases:', error.message);
        console.log('\n🔧 This might be a permissions issue. Check your Appwrite console.');
    }
}

listDatabases();
