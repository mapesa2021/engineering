import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database table names
export const TABLES = {
  BLOG_POSTS: 'blog_posts',
  TEAM_MEMBERS: 'team_members',
  TESTIMONIALS: 'testimonials',
  HERO_IMAGES: 'hero_images',
  TREE_PACKAGES: 'tree_packages',
  BUTTONS: 'homepage_buttons',
  NEWSLETTER_SUBSCRIBERS: 'newsletter_subscribers',
  CONTACT_MESSAGES: 'contact_messages',
  ADMIN_USERS: 'admin_users'
} as const

// Row Level Security (RLS) policies
export const enableRLS = async () => {
  // Enable RLS on all tables
  const tables = Object.values(TABLES)
  
  for (const table of tables) {
    await supabase.rpc('enable_rls', { table_name: table })
  }
} 