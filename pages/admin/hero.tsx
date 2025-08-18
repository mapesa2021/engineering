import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { 
  getHeroImages, 
  createHeroImage, 
  updateHeroImage, 
  deleteHeroImage, 
  updateHeroImageOrder 
} from '../../lib/db';
import type { HeroImage } from '../../lib/supabase';

const HeroManagement = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [heroImages, setHeroImages] = useState<HeroImage[]>([]);
  const [editingImage, setEditingImage] = useState<HeroImage | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('admin_token');
    if (token === 'admin_authenticated') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Load hero images from database
    if (isAuthenticated) {
      loadHeroImages();
    }
  }, [isAuthenticated]);

  const loadHeroImages = async () => {
    try {
      const images = await getHeroImages();
      setHeroImages(images);
    } catch (error) {
      console.error('Error loading hero images:', error);
    }
  };

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/admin/login');
    }
  }, [isLoading, isAuthenticated, router]);

  const handleEditImage = (image: HeroImage) => {
    setEditingImage({ ...image });
  };

  const handleSaveImage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingImage) return;

    setIsSubmitting(true);
    try {
      if (editingImage.id > 1000) {
        // This is a new image (temporary ID)
        const newImageData = {
          title: editingImage.title,
          subtitle: editingImage.subtitle || '',
          image_url: editingImage.image_url,
          order_index: editingImage.order_index,
          is_active: true
        };
        
        const newImage = await createHeroImage(newImageData);
        if (newImage) {
          setHeroImages(prev => [...prev, newImage]);
          await loadHeroImages(); // Reload to get the real ID
        }
      } else {
        // This is an existing image
        const updatedImage = await updateHeroImage(editingImage.id, {
          title: editingImage.title,
          subtitle: editingImage.subtitle,
          image_url: editingImage.image_url,
          order_index: editingImage.order_index
        });
        
        if (updatedImage) {
          setHeroImages(prev => 
            prev.map(img => 
              img.id === editingImage.id ? updatedImage : img
            )
          );
        }
      }
      setEditingImage(null);
    } catch (error) {
      console.error('Error saving hero image:', error);
      alert('Error saving image. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteImage = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        const success = await deleteHeroImage(id);
        if (success) {
          setHeroImages(prev => prev.filter(img => img.id !== id));
        } else {
          alert('Error deleting image. Please try again.');
        }
      } catch (error) {
        console.error('Error deleting hero image:', error);
        alert('Error deleting image. Please try again.');
      }
    }
  };

  const handleAddImage = () => {
    const newImage: HeroImage = {
      id: Date.now(), // Temporary ID
      title: '',
      subtitle: '',
      image_url: '',
      order_index: heroImages.length + 1,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    setEditingImage(newImage);
  };

  const handleReorder = async (fromIndex: number, toIndex: number) => {
    const newImages = [...heroImages];
    const [movedImage] = newImages.splice(fromIndex, 1);
    newImages.splice(toIndex, 0, movedImage);
    
    // Update order numbers
    newImages.forEach((img, index) => {
      img.order_index = index + 1;
    });
    
    setHeroImages(newImages);
    
    // Save the new order to database
    try {
      await updateHeroImageOrder(newImages);
    } catch (error) {
      console.error('Error updating image order:', error);
      alert('Error updating image order. Please try again.');
    }
  };

  const handleSaveAll = async () => {
    setIsSubmitting(true);
    
    try {
      // Reload to reflect any changes made directly in the grid
      await loadHeroImages(); 
      
      setIsSubmitting(false);
      alert('Hero images updated successfully!');
    } catch (error) {
      console.error('Error saving hero images:', error);
      alert('Error saving hero images. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-eco-green mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
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
        <title>Hero Image Management - Q Play Admin</title>
        <meta name="description" content="Manage hero slider images for Q Play website" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link href="/admin" className="mr-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-q-orange to-q-magenta rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Q</span>
                  </div>
                </Link>
                <h1 className="text-2xl font-bold text-gray-900">Hero Image Management</h1>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleAddImage}
                  className="bg-gradient-to-r from-q-orange to-q-magenta hover:from-glow-orange hover:to-glow-magenta text-white px-4 py-2 rounded-lg transition-all duration-200"
                >
                  + Add Image
                </button>
                <button
                  onClick={handleSaveAll}
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? 'Saving...' : 'Refresh Images'}
                </button>
                <Link
                  href="/admin"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Back to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Hero Image Guidelines</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>• Images should be high-quality and relevant to nightlife, music, and DJ culture</p>
                  <p>• Recommended size: 1920x1080 pixels or similar aspect ratio</p>
                  <p>• Use descriptive titles and subtitles for each image</p>
                  <p>• Drag and drop to reorder images (first image appears first in the slider)</p>
                  <p>• Images should capture the vibrant energy of Q Play's nightlife experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heroImages.map((image, index) => (
              <div key={image.id} className="bg-white rounded-lg shadow overflow-hidden">
                {/* Image Preview */}
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={image.image_url}
                    alt={image.title}
                    fill
                    className="object-cover"
                    onError={() => {
                      // Handle error if needed
                    }}
                  />
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    Order: {image.order_index}
                  </div>
                  {image.image_url && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      ✓ Loaded
                    </div>
                  )}
                </div>

                {/* Image Details */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{image.subtitle}</p>
                  
                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditImage(image)}
                      className="flex-1 bg-blue-100 text-blue-700 px-3 py-2 rounded text-sm hover:bg-blue-200 transition-colors duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteImage(image.id)}
                      className="flex-1 bg-red-100 text-red-700 px-3 py-2 rounded text-sm hover:bg-red-200 transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </div>

                  {/* Reorder Controls */}
                  <div className="flex justify-center mt-3 space-x-2">
                    {index > 0 && (
                      <button
                        onClick={() => handleReorder(index, index - 1)}
                        className="bg-gray-100 text-gray-600 p-1 rounded hover:bg-gray-200 transition-colors duration-200"
                        title="Move up"
                      >
                        ↑
                      </button>
                    )}
                    {index < heroImages.length - 1 && (
                      <button
                        onClick={() => handleReorder(index, index + 1)}
                        className="bg-gray-100 text-gray-600 p-1 rounded hover:bg-gray-200 transition-colors duration-200"
                        title="Move down"
                      >
                        ↓
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Edit Modal */}
          {editingImage && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg max-w-md w-full p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {editingImage.id > 1000 ? 'Add New Image' : 'Edit Image'}
                </h3>
                
                <form onSubmit={handleSaveImage} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Image URL *
                    </label>
                    <input
                      type="url"
                      required
                      value={editingImage.image_url}
                      onChange={(e) => setEditingImage(prev => prev ? { ...prev, image_url: e.target.value } : null)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingImage.title}
                      onChange={(e) => setEditingImage(prev => prev ? { ...prev, title: e.target.value } : null)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                      placeholder="Image title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subtitle
                    </label>
                    <textarea
                      rows={2}
                      value={editingImage.subtitle}
                      onChange={(e) => setEditingImage(prev => prev ? { ...prev, subtitle: e.target.value } : null)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-eco-green focus:border-transparent"
                      placeholder="Optional subtitle for the image"
                    />
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setEditingImage(null)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gradient-to-r from-q-orange to-q-magenta hover:from-glow-orange hover:to-glow-magenta text-white rounded-lg transition-all duration-200"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default HeroManagement; 