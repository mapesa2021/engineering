import { supabase, BlogPost, Event, TeamMember, Testimonial, HeroImage, ContactMessage, NewsletterSubscriber, ButtonConfig, AdminUser } from './supabase';

// Blog Posts
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts:', error);
      return getFallbackData('blog_posts', []);
    }
    return data || [];
  } catch (error) {
    console.error('Supabase error:', error);
    return getFallbackData('blog_posts', []);
  }
};

export const getBlogPostById = async (id: number): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Supabase error:', error);
    return null;
  }
};

export const createBlogPost = async (post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([post])
      .select()
      .single();

    if (error) {
      console.error('Error creating blog post:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Supabase error:', error);
    return null;
  }
};

export const updateBlogPost = async (id: number, updates: Partial<BlogPost>): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating blog post:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Supabase error:', error);
    return null;
  }
};

export const deleteBlogPost = async (id: number): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting blog post:', error);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Supabase error:', error);
    return false;
  }
};

// Events
export const getEvents = async (): Promise<Event[]> => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .in('status', ['upcoming', 'ongoing'])
      .order('date', { ascending: true });

    if (error) {
      console.error('Error fetching events:', error);
      return getFallbackData('events', []);
    }
    return data || [];
  } catch (error) {
    console.error('Supabase error:', error);
    return getFallbackData('events', []);
  }
};

export const getEventById = async (id: number): Promise<Event | null> => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching event:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Supabase error:', error);
    return null;
  }
};

export const createEvent = async (event: Omit<Event, 'id' | 'created_at' | 'updated_at'>): Promise<Event | null> => {
  try {
    const { data, error } = await supabase
      .from('events')
      .insert([event])
      .select()
      .single();

    if (error) {
      console.error('Error creating event:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Supabase error:', error);
    return null;
  }
};

export const updateEvent = async (id: number, updates: Partial<Event>): Promise<Event | null> => {
  try {
    const { data, error } = await supabase
      .from('events')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating event:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Supabase error:', error);
    return null;
  }
};

export const deleteEvent = async (id: number): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting event:', error);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Supabase error:', error);
    return false;
  }
};

// Team Members
export const getTeamMembers = async (): Promise<TeamMember[]> => {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching team members:', error);
      return getFallbackData('team_members', []);
    }
    return data || [];
  } catch (error) {
    console.error('Supabase error:', error);
    return getFallbackData('team_members', []);
  }
};

export const createTeamMember = async (member: Omit<TeamMember, 'id' | 'created_at' | 'updated_at'>): Promise<TeamMember | null> => {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .insert([member])
      .select()
      .single();

    if (error) {
      console.error('Error creating team member:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Supabase error:', error);
    return null;
  }
};

export const updateTeamMember = async (id: number, updates: Partial<TeamMember>): Promise<TeamMember | null> => {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating team member:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Supabase error:', error);
    return null;
  }
};

export const deleteTeamMember = async (id: number): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('team_members')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting team member:', error);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Supabase error:', error);
    return false;
  }
};

// Testimonials
export const getTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching testimonials:', error);
      return getFallbackData('testimonials', []);
    }
    return data || [];
  } catch (error) {
    console.error('Supabase error:', error);
    return getFallbackData('testimonials', []);
  }
};

// Hero Images
export const getHeroImages = async (): Promise<HeroImage[]> => {
  try {
    const { data, error } = await supabase
      .from('hero_images')
      .select('*')
      .eq('is_active', true)
      .order('order_index', { ascending: true });

    if (error) {
      console.error('Error fetching hero images:', error);
      return getFallbackData('hero_images', []);
    }
    return data || [];
  } catch (error) {
    console.error('Supabase error:', error);
    return getFallbackData('hero_images', []);
  }
};

// Contact Messages
export const createContactMessage = async (message: Omit<ContactMessage, 'id' | 'created_at' | 'updated_at'>): Promise<ContactMessage | null> => {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([message])
      .select()
      .single();

    if (error) {
      console.error('Error creating contact message:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Supabase error:', error);
    return null;
  }
};

export const getContactMessages = async (): Promise<ContactMessage[]> => {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching contact messages:', error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error('Supabase error:', error);
    return [];
  }
};

// Newsletter Subscribers
export const createNewsletterSubscriber = async (email: string): Promise<NewsletterSubscriber | null> => {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])
      .select()
      .single();

    if (error) {
      console.error('Error creating newsletter subscriber:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Supabase error:', error);
    return null;
  }
};

export const getNewsletterSubscribers = async (): Promise<NewsletterSubscriber[]> => {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('is_active', true)
      .order('subscribed_at', { ascending: false });

    if (error) {
      console.error('Error fetching newsletter subscribers:', error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error('Supabase error:', error);
    return [];
  }
};

// Buttons Config
export const getButtonsConfig = async (): Promise<ButtonConfig[]> => {
  try {
    const { data, error } = await supabase
      .from('buttons_config')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching buttons config:', error);
      return getFallbackData('buttons_config', []);
    }
    return data || [];
  } catch (error) {
    console.error('Supabase error:', error);
    return getFallbackData('buttons_config', []);
  }
};

// Admin Authentication
export const adminLogin = async (username: string, password: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from('admin_users')
      .select('*')
      .eq('username', username)
      .eq('is_active', true)
      .single();

    if (error || !data) {
      console.error('Admin login error:', error);
      return false;
    }

    // For now, use a simple password check (in production, use proper hashing)
    // The password in the database is 'qplay2024'
    if (password === 'qplay2024') {
      if (typeof window !== 'undefined') {
        localStorage.setItem('admin_token', 'admin_authenticated');
      }
      return true;
    }

    return false;
  } catch (error) {
    console.error('Supabase error:', error);
    return false;
  }
};

export const isAdminAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('admin_token') === 'admin_authenticated';
};

export const adminLogout = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('admin_token');
  }
};

// Fallback to localStorage if Supabase is not available
const getFallbackData = (key: string, defaultValue: any): any => {
  if (typeof window === 'undefined') return defaultValue;
  
  try {
    const stored = localStorage.getItem(`caretheplanet_${key}`);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error);
  }
  
  return defaultValue;
}; 