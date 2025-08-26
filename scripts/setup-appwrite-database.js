const { Client, Databases } = require('appwrite');

// Appwrite Configuration
const APPWRITE_ENDPOINT = 'https://fra.cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID = '68ad54b20017909021e3';

// Initialize Appwrite Client
const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

const databases = new Databases(client);

// Database and Collection IDs
const DATABASE_ID = 'caretheplanet_db';

async function setupDatabase() {
    console.log('🚀 Setting up Appwrite Database for Care The Planet...');
    console.log('==================================================');

    try {
        // Step 1: Create Database
        console.log('📊 Creating database...');
        try {
            await databases.create(DATABASE_ID, 'Care The Planet Database');
            console.log('✅ Database created successfully!');
        } catch (error) {
            if (error.code === 409) {
                console.log('ℹ️  Database already exists, continuing...');
            } else {
                throw error;
            }
        }

        console.log('\n🎉 Database setup completed successfully!');
        console.log('\n📋 Next steps:');
        console.log('1. Go to your Appwrite Console: https://fra.cloud.appwrite.io/');
        console.log('2. Navigate to your project: ENGINEEREING - OLERUM');
        console.log('3. Go to Databases > caretheplanet_db');
        console.log('4. Create collections manually in the console');
        console.log('5. Test your website at: http://localhost:3000');

    } catch (error) {
        console.error('❌ Error setting up database:', error);
    }
}

// Run the setup
setupDatabase();
