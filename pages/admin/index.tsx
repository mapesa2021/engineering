import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken');
    if (token === 'admin-token-123') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/admin/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-q-orange mx-auto mb-4"></div>
          <p className="text-white/80">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Q Play Admin Dashboard</title>
        <meta name="description" content="Admin dashboard for Q Play website management" />
      </Head>

      <div className="min-h-screen bg-dark-bg">
        {/* Header */}
        <header className="bg-dark-card shadow-lg border-b border-q-orange/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center mr-3 overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/HkxHn2Ct/Untitled-design-25.png" 
                    alt="Q Play Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl font-black text-white">Q Play Admin</h1>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-white/80">Welcome, Admin</span>
                <button
                  onClick={() => {
                    localStorage.removeItem('adminToken');
                    router.push('/admin/login');
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-dark-card rounded-xl shadow-lg border border-q-orange/20 p-6">
              <div className="flex items-center">
                <div className="p-3 bg-q-orange/20 rounded-full">
                  <svg className="w-6 h-6 text-q-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white/60">Blog Posts</p>
                  <p className="text-2xl font-semibold text-white">5</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card rounded-xl shadow-lg border border-q-magenta/20 p-6">
              <div className="flex items-center">
                <div className="p-3 bg-q-magenta/20 rounded-full">
                  <svg className="w-6 h-6 text-q-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white/60">Slider Images</p>
                  <p className="text-2xl font-semibold text-white">5</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card rounded-xl shadow-lg border border-q-purple/20 p-6">
              <div className="flex items-center">
                <div className="p-3 bg-q-purple/20 rounded-full">
                  <svg className="w-6 h-6 text-q-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white/60">Contact Messages</p>
                  <p className="text-2xl font-semibold text-white">8</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card rounded-xl shadow-lg border border-q-orange/20 p-6">
              <div className="flex items-center">
                <div className="p-3 bg-q-orange/20 rounded-full">
                  <svg className="w-6 h-6 text-q-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white/60">Newsletter Subs</p>
                  <p className="text-2xl font-semibold text-white">1.2K</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Link href="/admin/blog/new" className="block">
              <div className="bg-dark-card rounded-xl shadow-lg border border-q-orange/20 p-6 hover:shadow-xl hover:border-q-orange/40 transition-all duration-200 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3 bg-q-orange/20 rounded-full">
                    <svg className="w-6 h-6 text-q-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Create Blog Post</h3>
                    <p className="text-white/60">Write and publish a new article</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/admin/hero" className="block">
              <div className="bg-dark-card rounded-xl shadow-lg border border-q-magenta/20 p-6 hover:shadow-xl hover:border-q-magenta/40 transition-all duration-200 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3 bg-q-magenta/20 rounded-full">
                    <svg className="w-6 h-6 text-q-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Manage Slider Images</h3>
                    <p className="text-white/60">Update hero slider images</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/admin/blog" className="block">
              <div className="bg-dark-card rounded-xl shadow-lg border border-q-purple/20 p-6 hover:shadow-xl hover:border-q-purple/40 transition-all duration-200 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3 bg-q-purple/20 rounded-full">
                    <svg className="w-6 h-6 text-q-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Manage Blog Posts</h3>
                    <p className="text-white/60">Edit, delete, and organize articles</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/admin/events" className="block">
              <div className="bg-dark-card rounded-xl shadow-lg border border-q-orange/20 p-6 hover:shadow-xl hover:border-q-orange/40 transition-all duration-200 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3 bg-q-orange/20 rounded-full">
                    <svg className="w-6 h-6 text-q-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Manage Events</h3>
                    <p className="text-white/60">Create and manage upcoming events</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/admin/testimonials" className="block">
              <div className="bg-dark-card rounded-xl shadow-lg border border-q-orange/20 p-6 hover:shadow-xl hover:border-q-orange/40 transition-all duration-200 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3 bg-q-orange/20 rounded-full">
                    <svg className="w-6 h-6 text-q-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Manage Testimonials</h3>
                    <p className="text-white/60">Add, edit, and organize testimonials</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/admin/buttons" className="block">
              <div className="bg-dark-card rounded-xl shadow-lg border border-q-magenta/20 p-6 hover:shadow-xl hover:border-q-magenta/40 transition-all duration-200 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3 bg-q-magenta/20 rounded-full">
                    <svg className="w-6 h-6 text-q-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Manage Buttons</h3>
                    <p className="text-white/60">Customize button text and links</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/admin/newsletter" className="block">
              <div className="bg-dark-card rounded-xl shadow-lg border border-q-purple/20 p-6 hover:shadow-xl hover:border-q-purple/40 transition-all duration-200 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3 bg-q-purple/20 rounded-full">
                    <svg className="w-6 h-6 text-q-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Newsletter Subscribers</h3>
                    <p className="text-white/60">Manage email subscriptions</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/admin/contact-messages" className="block">
              <div className="bg-dark-card rounded-xl shadow-lg border border-q-orange/20 p-6 hover:shadow-xl hover:border-q-orange/40 transition-all duration-200 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3 bg-q-orange/20 rounded-full">
                    <svg className="w-6 h-6 text-q-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Contact Messages</h3>
                    <p className="text-white/60">View contact form submissions</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/admin/team" className="block">
              <div className="bg-dark-card rounded-xl shadow-lg border border-q-magenta/20 p-6 hover:shadow-xl hover:border-q-magenta/40 transition-all duration-200 cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3 bg-q-magenta/20 rounded-full">
                    <svg className="w-6 h-6 text-q-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Manage Team</h3>
                    <p className="text-white/60">Add and edit team members</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Recent Activity */}
          <div className="bg-dark-card rounded-xl shadow-lg border border-q-orange/20">
            <div className="px-6 py-4 border-b border-q-orange/20">
              <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-q-orange rounded-full"></div>
                  <span className="text-white/80">New blog post &quot;Q Play App Update&quot; published</span>
                  <span className="text-sm text-white/40">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-q-magenta rounded-full"></div>
                  <span className="text-white/80">Hero slider image &quot;Nightclub Scene&quot; updated</span>
                  <span className="text-sm text-white/40">1 day ago</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-q-purple rounded-full"></div>
                  <span className="text-white/80">New testimonial from DJ Mike added</span>
                  <span className="text-sm text-white/40">3 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard; 