import React, { useState } from 'react';
import { courses } from '../data/courses';
import Button from './Button';
import { Clock, Users, Award, ChevronRight } from 'lucide-react';

const Courses: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'Beginner', label: 'Beginner' },
    { id: 'Intermediate', label: 'Intermediate' },
    { id: 'Advanced', label: 'Advanced' },
  ];
  
  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.level === activeFilter);
  
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container-custom">
        <div className="section-heading">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Our Courses & Programs</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Discover our range of certified baking and pastry arts courses designed to take you from basics to mastery with hands-on professional training.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-10 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className={`group bg-white rounded-xl overflow-hidden shadow-course transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${
                course.featured ? 'ring-2 ring-accent-500 ring-offset-4' : ''
              }`}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                {course.featured && (
                  <div className="absolute top-4 right-4 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    course.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-primary-700 font-semibold">{course.price}</span>
                </div>
                
                <h3 className="font-display text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>
                
                <div className="flex items-center text-gray-500 text-sm mb-5">
                  <Clock size={16} className="mr-1" />
                  <span className="mr-4">{course.duration}</span>
                  
                  <Users size={16} className="mr-1" />
                  <span>Limited Seats</span>
                </div>
                
                <hr className="mb-5 border-gray-100" />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award size={16} className="text-accent-600 mr-2" />
                    <span className="text-xs text-gray-600">Certification Included</span>
                  </div>
                  
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="flex items-center"
                    icon={<ChevronRight size={16} />}
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="primary" size="lg">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;