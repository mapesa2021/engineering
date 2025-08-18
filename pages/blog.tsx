import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCard from '../components/AnimatedCard';
import { getBlogPosts } from '../lib/db';
import type { BlogPost } from '../lib/supabase';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load blog posts from database (only on client side)
    if (typeof window !== 'undefined') {
      const loadPosts = async () => {
        try {
          const posts = await getBlogPosts();
          setBlogPosts(posts);
        } catch (error) {
          console.error('Error loading blog posts:', error);
          setBlogPosts([]);
        } finally {
          setIsLoading(false);
        }
      };
      
      loadPosts();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Blog - Q Play | Nightlife & DJ Stories</title>
        <meta name="description" content="Read the latest nightlife stories, DJ success stories, and platform updates from Q Play." />
        <meta name="keywords" content="nightlife blog, DJ stories, music industry, Q Play platform" />
        <link rel="icon" href="https://i.postimg.cc/HkxHn2Ct/Untitled-design-25.png" />
      </Head>

      <main>
        <Navbar />
        
        {/* Hero Section */}
        <AnimatedSection delay={0.1}>
          <section className="bg-gradient-to-br from-q-orange via-q-magenta to-q-purple section-padding">
            <div className="container-custom text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Q Play Blog
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                Stay updated with the latest nightlife stories, DJ success stories, and platform updates from Q Play.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Blog Posts Grid */}
        <AnimatedSection delay={0.2}>
          <section className="section-padding bg-dark-bg">
            <div className="container-custom">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Latest Articles
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Discover insights, tips, and inspiring stories about nightlife, DJs, and the music industry.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                  // Loading skeleton
                  Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="bg-dark-card border border-q-orange/20 rounded-xl shadow-lg p-6 animate-pulse">
                      <div className="h-48 bg-gradient-to-br from-q-orange/20 to-q-magenta/20 rounded-lg mb-4"></div>
                      <div className="h-4 bg-gray-600 rounded mb-2"></div>
                      <div className="h-6 bg-gray-600 rounded mb-4"></div>
                      <div className="h-4 bg-gray-600 rounded mb-2"></div>
                      <div className="h-4 bg-gray-600 rounded mb-4"></div>
                      <div className="h-10 bg-gray-600 rounded"></div>
                    </div>
                  ))
                ) : blogPosts.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-400 text-lg mb-4">No blog posts available at the moment.</p>
                    <p className="text-gray-500">Check back soon for the latest nightlife stories and DJ tips!</p>
                  </div>
                                ) : (
                  blogPosts.map((post, index) => (
                    <AnimatedCard key={post.id} delay={0.1 + index * 0.1}>
                      <Link href={`/blog/${post.id}`}>
                      <article className="bg-dark-card border border-q-orange/20 rounded-xl shadow-lg hover:shadow-xl hover:shadow-q-orange/20 transition-all duration-300 overflow-hidden group cursor-pointer">
                      {/* Blog Image */}
                      <div className="h-48 bg-gradient-to-br from-q-orange to-q-magenta flex items-center justify-center">
                        <span className="text-6xl">{post.image}</span>
                      </div>
                      
                      {/* Blog Content */}
                      <div className="p-6">
                        {/* Category */}
                        <div className="mb-3">
                          <span className="inline-block bg-q-magenta/20 text-q-magenta text-sm font-semibold px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-q-orange transition-colors duration-200">
                          {post.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <span>{post.author}</span>
                          <span>{post.read_time}</span>
                        </div>
                        
                        {/* Date */}
                        <div className="text-sm text-gray-500 mb-4">
                          {post.date}
                        </div>
                        
                        {/* Read More Button */}
                        <button className="w-full bg-gradient-to-r from-q-orange to-q-magenta hover:from-glow-orange hover:to-glow-magenta text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                          Read More
                        </button>
                      </div>
                    </article>
                    </Link>
                  </AnimatedCard>
                  ))
                )}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-transparent border-2 border-q-orange text-q-orange hover:bg-q-orange hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200">
                  Load More Articles
                </button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Newsletter Signup */}
        <AnimatedSection delay={0.8}>
          <section className="section-padding bg-gradient-to-r from-q-orange to-q-magenta">
            <div className="container-custom text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest nightlife stories, DJ tips, and platform updates delivered to your inbox.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
                  />
                  <button className="bg-white text-q-orange font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="bg-dark-bg border-t border-q-orange/20 text-white py-12">
        <div className="container-custom text-center">
          <p>&copy; 2024 Q Play. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Blog; 