import React from 'react';
import { teamMembers } from '../data/team';
import { Award, CheckCircle, Users, BookOpen } from 'lucide-react';
import { credentials } from '../data/credentials';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary-50">
      <div className="container-custom">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-display font-bold">About The Baking School</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Founded in 2017, we are Bathinda's premier culinary education institute specializing in baking and pastry arts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-display font-semibold text-primary-700 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6">
              At The Baking School, we're committed to providing hands-on, practical culinary education that transforms passion into profession. Our skill-focused approach ensures students learn techniques with real-world application, whether pursuing careers in the culinary industry or entrepreneurial ventures.
            </p>
            
            <h3 className="text-2xl font-display font-semibold text-primary-700 mb-4">
              Professional Affiliations
            </h3>
            <div className="space-y-6">
              {credentials.map((credential) => (
                <div key={credential.id} className="flex items-start">
                  <div className="bg-secondary-100 p-3 rounded-full text-primary-600 mr-4">
                    {credential.logo === 'Award' ? <Award size={24} /> : <CheckCircle size={24} />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{credential.name}</h4>
                    <p className="text-gray-600 text-sm">{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="text-accent-600 mb-2">
                  <Users size={28} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">500+ Graduates</h4>
                <p className="text-gray-600 text-sm">Success stories and thriving careers</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="text-accent-600 mb-2">
                  <BookOpen size={28} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">15+ Courses</h4>
                <p className="text-gray-600 text-sm">Comprehensive culinary curriculum</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6287305/pexels-photo-6287305.jpeg"
                alt="Baking classroom at The Baking School" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-5 -left-5 md:-bottom-8 md:-left-8 bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-primary-800 font-display font-semibold">
                  "We're nurturing Punjab's next generation of culinary artisans through tradition, 
                  innovation, and hands-on excellence."
                </p>
                <div className="mt-3 flex items-center">
                  <img 
                    src={teamMembers[0].image} 
                    alt={teamMembers[0].name} 
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-semibold">{teamMembers[0].name}</p>
                    <p className="text-xs text-gray-600">{teamMembers[0].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-center mb-12">
            Meet Our Expert Team
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h4 className="font-display font-semibold text-xl text-primary-800 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-accent-600 text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm line-clamp-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;