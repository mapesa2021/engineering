'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getTeamMembers } from '../../lib/db';
import type { TeamMember } from '../../lib/supabase';

const TeamManagement = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
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

  useEffect(() => {
    if (isAuthenticated) {
      loadTeamMembers();
    }
  }, [isAuthenticated]);

  const loadTeamMembers = async () => {
    try {
      const members = await getTeamMembers();
      setTeamMembers(members);
    } catch (error) {
      console.error('Error loading team members:', error);
    }
  };

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
        <title>Team Management - Q Play Admin</title>
        <meta name="description" content="Manage team members for Q Play" />
      </Head>

      <div className="min-h-screen bg-dark-bg">
        {/* Header */}
        <header className="bg-dark-card border-b border-q-orange/20 px-6 py-4">
          <div className="flex items-center justify-between">
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
            <Link href="/admin" className="text-q-orange hover:text-glow-orange transition-colors">
              ← Back to Dashboard
            </Link>
          </div>
        </header>

        <main className="p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Team Members</h2>
              <div className="text-white/60">
                {teamMembers.length} member{teamMembers.length !== 1 ? 's' : ''}
              </div>
            </div>

            {/* Team Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-dark-card border border-q-orange/20 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-q-orange to-q-magenta rounded-full flex items-center justify-center mr-4 overflow-hidden">
                      {member.image && member.image.startsWith('http') ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl">{member.image || '👨‍💼'}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-q-orange font-semibold">{member.position}</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-4">{member.bio}</p>
                  
                  {member.social_links && (
                    <div className="flex space-x-3">
                      {member.social_links.email && (
                        <a
                          href={`mailto:${member.social_links.email}`}
                          className="text-q-orange hover:text-glow-orange transition-colors"
                          title="Email"
                        >
                          📧
                        </a>
                      )}
                      {member.social_links.linkedin && (
                        <a
                          href={member.social_links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-q-orange hover:text-glow-orange transition-colors"
                          title="LinkedIn"
                        >
                          💼
                        </a>
                      )}
                      {member.social_links.twitter && (
                        <a
                          href={member.social_links.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-q-orange hover:text-glow-orange transition-colors"
                          title="Twitter"
                        >
                          🐦
                        </a>
                      )}
                    </div>
                  )}
                  
                  <div className="mt-4 pt-4 border-t border-q-orange/20">
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span>Status: {member.is_active ? 'Active' : 'Inactive'}</span>
                      <span>ID: {member.id}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {teamMembers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/60 text-lg mb-4">No team members found.</p>
                <p className="text-white/40">Team members will appear here once added to the database.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default TeamManagement; 