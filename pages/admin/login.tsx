import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication (in production, use proper auth)
    if (credentials.username === 'admin' && credentials.password === 'qplay2024') {
      localStorage.setItem('adminToken', 'admin-token-123');
      router.push('/admin');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user starts typing
  };

  return (
    <>
      <Head>
        <title>Q Play Admin Login</title>
        <meta name="description" content="Admin login for Q Play website" />
      </Head>

      <div className="min-h-screen bg-dark-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://i.postimg.cc/HkxHn2Ct/Untitled-design-25.png" 
                  alt="Q Play Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="mt-6 text-center text-3xl font-black text-white">
              Q Play Admin
            </h2>
            <p className="mt-2 text-center text-sm text-white/60">
              Sign in to manage your website
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-white/80 mb-2">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={credentials.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-white/20 bg-white/5 text-white placeholder-white/40 rounded-lg focus:ring-2 focus:ring-q-orange focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your username"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-white/20 bg-white/5 text-white placeholder-white/40 rounded-lg focus:ring-2 focus:ring-q-orange focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-q-orange to-q-magenta hover:from-q-magenta hover:to-q-purple text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-q-orange/30"
              >
                Sign In
              </button>
            </div>
          </form>
          
          <div className="text-center">
            <p className="text-xs text-white/40">
              Demo credentials: admin / qplay2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin; 