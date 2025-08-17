// Simple test to check Supabase connection
import { supabase } from './lib/supabase'

async function testConnection() {
  try {
    console.log('🔌 Testing Supabase connection...')
    
    // Test basic connection
    const { data, error } = await supabase
      .from('team_members')
      .select('count')
      .limit(1)
    
    if (error) {
      console.log('❌ Connection error:', error.message)
      return false
    }
    
    console.log('✅ Database connection successful!')
    console.log('📊 Response:', data)
    return true
    
  } catch (err) {
    console.log('❌ Unexpected error:', err)
    return false
  }
}

// Run test if this file is executed directly
if (require.main === module) {
  testConnection()
}

export { testConnection } 