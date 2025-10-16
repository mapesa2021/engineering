'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { 
  addBlogPost, 
  isAdminAuthenticated 
} from '../../../utils/adminData';

const NewBlogPost = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: 'Nightlife',
    image: '🎵',
    status: 'draft' as 'draft' | 'published'
  });

  // Check authentication
  useEffect(() => {
    if (!isAdminAuthenticated()) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Calculate read time (rough estimate: 200 words per minute)
      const wordCount = formData.content.split(' ').length;
      const readTime = Math.ceil(wordCount / 200);

      const newPost = {
        ...formData,
        readTime: `${readTime} min read`,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };

      addBlogPost(newPost);
      
      // Redirect to blog management page
      router.push('/admin/blog');
    } catch (error) {
      console.error('Error creating blog post:', error);
      alert('Error creating blog post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const categoryOptions = [
    'Nightlife',
    'DJ Success',
    'Industry Trends',
    'DJ Tips',
    'App Updates',
    'Venue Spotlight',
    'Fan Stories',
    'Music Industry'
  ];

  const imageOptions = [
    '🎵', '🎛️', '🎧', '🎤', '🎶', '🎷', '🎸', '🎹', '🥁', '🎺',
    '💿', '📀', '🎪', '🎭', '🎨', '🎬', '🎮', '🎯', '🎲', '🎰',
    '🕺', '💃', '🎉', '✨', '🔥', '💫', '🌟', '⭐', '💎', '🎊'
  ];

  if (!isAdminAuthenticated()) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-dark-bg py-8">
      <div className="container-custom">
        <div className="bg-dark-card rounded-xl shadow-lg p-8 border border-q-orange/20">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Create New Blog Post</h1>
              <p className="text-gray-300">Write and publish a new article for your blog</p>
            </div>
            <Link
              href="/admin/blog"
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              ← Back to Blog Management
            </Link>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-white/20 bg-white/5 text-white placeholder-white/60 rounded-lg focus:ring-2 focus:ring-q-magenta focus:border-transparent"
                  placeholder="Enter blog post title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Author *
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-white/20 bg-white/5 text-white placeholder-white/60 rounded-lg focus:ring-2 focus:ring-q-magenta focus:border-transparent"
                  placeholder="Enter author name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Excerpt *
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-white/20 bg-white/5 text-white placeholder-white/60 rounded-lg focus:ring-2 focus:ring-q-magenta focus:border-transparent"
                placeholder="Brief summary of the blog post..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Content *
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                required
                rows={12}
                className="w-full px-3 py-2 border border-white/20 bg-white/5 text-white placeholder-white/60 rounded-lg focus:ring-2 focus:ring-q-magenta focus:border-transparent"
                placeholder="Write your blog post content here..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-white/20 bg-white/5 text-white rounded-lg focus:ring-2 focus:ring-q-magenta focus:border-transparent"
                >
                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Featured Image Emoji
                </label>
                <div className="flex flex-wrap gap-2">
                  {imageOptions.map((emoji, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, image: emoji }))}
                      className={`w-10 h-10 text-xl rounded-lg border-2 transition-colors ${
                        formData.image === emoji 
                          ? 'border-q-magenta bg-q-magenta text-white' 
                          : 'border-white/30 hover:border-q-magenta'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-white/20 bg-white/5 text-white rounded-lg focus:ring-2 focus:ring-q-magenta focus:border-transparent"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-q-orange to-q-magenta hover:from-glow-orange hover:to-glow-magenta text-white px-8 py-3 rounded-lg transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Creating...' : 'Create Blog Post'}
              </button>
              <Link
                href="/admin/blog"
                className="px-8 py-3 text-gray-300 hover:text-white transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewBlogPost; 