'use client';
import { useState, useEffect } from 'react';
import { getTeamMembers } from '../lib/adminData';
import type { TeamMember } from '../lib/adminData';
import AnimatedCard from './AnimatedCard';

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  maxMembers?: number;
  showExpertise?: boolean;
  showContact?: boolean;
}

export default function TeamSection({ 
  title = "Meet Our Expert Team",
  subtitle = "Our experienced professionals are dedicated to delivering exceptional engineering solutions across Tanzania.",
  maxMembers = 6,
  showExpertise = true,
  showContact = false
}: TeamSectionProps) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTeamMembers = () => {
      try {
        console.log('🔍 TeamSection - Loading team members from admin data');
        const allMembers = getTeamMembers();
        console.log('🔍 TeamSection - All members:', allMembers);
        
        const activeMembers = allMembers
          .filter(member => member.isActive)
          .slice(0, maxMembers);
        
        console.log('🔍 TeamSection - Active members to display:', activeMembers);
        setTeamMembers(activeMembers);
      } catch (error) {
        console.error('❌ TeamSection - Error loading team members:', error);
        setTeamMembers([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadTeamMembers();
    
    // Refresh team members every 5 seconds to catch admin updates
    const interval = setInterval(loadTeamMembers, 5000);
    
    return () => clearInterval(interval);
  }, [maxMembers]);

  if (isLoading) {
    return (
      <section className="section-padding bg-oleum-navy">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-display">
              {title}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-body">
              {subtitle}
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-oleum-yellow"></div>
          </div>
        </div>
      </section>
    );
  }

  if (teamMembers.length === 0) {
    return (
      <section className="section-padding bg-oleum-navy">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-display">
              {title}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-body">
              {subtitle}
            </p>
          </div>
          <div className="text-center text-white/80">
            <p>No team members available. Please add team members through the admin panel.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-oleum-navy">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-display">
            {title}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-body">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedCard 
              key={member.id}
              delay={index * 100}
              animationType="scaleUp"
              hoverEffect="lift"
            >
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-oleum-gray/20 p-6">
                <div className={`w-32 h-32 ${index % 2 === 0 ? 'bg-oleum-yellow' : 'bg-oleum-navy'} rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden border-2 ${index % 2 === 0 ? 'border-oleum-navy/20' : 'border-oleum-yellow/20'} shadow-md`}>
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <div className={`w-full h-full flex items-center justify-center ${member.image ? 'hidden' : ''}`}>
                    <span className="text-4xl">👨‍💼</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-oleum-navy mb-2 text-center">{member.name}</h3>
                <p className="text-oleum-yellow font-semibold mb-3 text-center">{member.position}</p>
                <p className="text-oleum-navy/80 text-sm text-center mb-4">
                  {member.bio}
                </p>
                
                {showExpertise && member.expertise && member.expertise.length > 0 && (
                  <div className="mb-4">
                    <p className="text-oleum-navy/60 text-xs text-center mb-2">Expertise:</p>
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-oleum-yellow/20 text-oleum-navy text-xs px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.expertise.length > 3 && (
                        <span className="text-oleum-navy/60 text-xs">+{member.expertise.length - 3} more</span>
                      )}
                    </div>
                  </div>
                )}
                
                {showContact && (
                  <div className="text-center">
                    <p className="text-oleum-navy/60 text-xs">Department: {member.department}</p>
                    {member.email && (
                      <p className="text-oleum-navy/60 text-xs">Email: {member.email}</p>
                    )}
                    {member.phone && (
                      <p className="text-oleum-navy/60 text-xs">Phone: {member.phone}</p>
                    )}
                  </div>
                )}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
