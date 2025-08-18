import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import AnimatedSection from '../../components/AnimatedSection';
import { getBlogPostById } from '../../lib/db';
import type { BlogPost } from '../../lib/supabase';

const BlogPostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (id) {
      const loadPost = async () => {
        try {
          console.log('🔍 Loading blog post with ID:', id);
          const foundPost = await getBlogPostById(Number(id));
          console.log('📝 Found blog post:', foundPost);
          
          if (foundPost) {
            setPost(foundPost);
            
            // For now, we'll set empty related posts since we need a separate function
            // TODO: Implement getRelatedPosts function
            setRelatedPosts([]);
          } else {
            console.log('❌ Blog post not found, redirecting to blog list');
            // Post not found
            router.push('/blog');
          }
        } catch (error) {
          console.error('❌ Error loading blog post:', error);
          router.push('/blog');
        } finally {
          setIsLoading(false);
        }
      };
      
      loadPost();
    }
  }, [id, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-q-orange mx-auto mb-4"></div>
          <p className="text-white/80">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <p className="text-gray-300 mb-6">The blog post you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link href="/blog" className="bg-gradient-to-r from-q-orange to-q-magenta hover:from-glow-orange hover:to-glow-magenta text-white px-6 py-3 rounded-lg transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} - Q Play Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, nightlife blog, DJ stories, Q Play platform`} />
        <link rel="icon" href="https://i.postimg.cc/HkxHn2Ct/Untitled-design-25.png" />
      </Head>

      <main>
        <Navbar />
        
        {/* Blog Post Content */}
        <AnimatedSection delay={0.1}>
          <article className="bg-dark-bg">
            {/* Hero Image */}
            <div className="h-64 md:h-96 bg-gradient-to-br from-q-orange to-q-magenta flex items-center justify-center">
              <span className="text-8xl md:text-9xl">{post.image}</span>
            </div>
            
            {/* Article Content */}
            <div className="container-custom py-12">
              <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="mb-8">
                  <div className="mb-4">
                    <span className="inline-block bg-q-magenta/20 text-q-magenta text-sm font-semibold px-4 py-2 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    {post.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-6">
                    <div className="flex items-center">
                      <span className="text-q-orange mr-2">👤</span>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-q-magenta mr-2">📅</span>
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-q-purple mr-2">⏱️</span>
                      <span>{post.read_time}</span>
                    </div>
                  </div>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-q-orange to-q-magenta rounded-full"></div>
                </header>
                
                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
                    {post.content}
                  </div>
                </div>
                
                {/* Article Footer */}
                <footer className="mt-12 pt-8 border-t border-q-orange/20">
                  <div className="flex items-center justify-between">
                    <div className="text-gray-400">
                      <span>Published on {post.date}</span>
                    </div>
                    <Link 
                      href="/blog"
                      className="bg-gradient-to-r from-q-orange to-q-magenta hover:from-glow-orange hover:to-glow-magenta text-white px-6 py-3 rounded-lg transition-colors"
                    >
                      ← Back to Blog
                    </Link>
                  </div>
                </footer>
              </div>
            </div>
          </article>
        </AnimatedSection>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <AnimatedSection delay={0.3}>
            <section className="bg-dark-surface py-16">
              <div className="container-custom">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Related Articles
                  </h2>
                  <p className="text-gray-300">
                    More stories about {post.category}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                      <article className="bg-dark-card border border-q-orange/20 rounded-xl shadow-lg hover:shadow-xl hover:shadow-q-orange/20 transition-all duration-300 overflow-hidden group cursor-pointer">
                        {/* Blog Image */}
                        <div className="h-48 bg-gradient-to-br from-q-orange to-q-magenta flex items-center justify-center">
                          <span className="text-6xl">{relatedPost.image}</span>
                        </div>
                        
                        {/* Blog Content */}
                        <div className="p-6">
                          <div className="mb-3">
                            <span className="inline-block bg-q-magenta/20 text-q-magenta text-sm font-semibold px-3 py-1 rounded-full">
                              {relatedPost.category}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-q-orange transition-colors duration-200">
                            {relatedPost.title}
                          </h3>
                          
                          <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                            {relatedPost.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <span>{relatedPost.author}</span>
                            <span>{relatedPost.read_time}</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>
        )}

        {/* Newsletter Signup */}
        <AnimatedSection delay={0.5}>
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

export default BlogPostPage; 