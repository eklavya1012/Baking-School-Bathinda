import React from 'react';
import Button from './Button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative h-screen min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: 'url(https://images.pexels.com/photos/6294231/pexels-photo-6294231.jpeg)'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="container-custom relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-4xl mx-auto mb-6 animate-[fade-in_1s_ease-out]">
          Master the Art of Baking with Punjab's Premier Culinary School
        </h1>
        
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8 animate-[fade-in_1s_0.3s_ease-out_both]">
          Hands-on training, professional techniques, and certified courses for aspiring bakers, 
          entrepreneurs, and culinary enthusiasts
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-[fade-in_1s_0.6s_ease-out_both]">
          <Button 
            variant="primary" 
            size="lg"
            className="bg-primary-500 hover:bg-primary-600"
          >
            Explore Courses
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:bg-opacity-20"
            icon={<ChevronRight size={18} />}
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-10 animate-[fade-in_1s_0.9s_ease-out_both]">
          <div className="flex items-center">
            <div className="bg-white bg-opacity-20 p-2 rounded-full">
              <div className="bg-white text-primary-800 h-12 w-12 rounded-full flex items-center justify-center font-bold">15+</div>
            </div>
            <span className="ml-3 text-left">
              <span className="block text-sm">Professional</span>
              <span className="block font-medium">Courses</span>
            </span>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white bg-opacity-20 p-2 rounded-full">
              <div className="bg-white text-primary-800 h-12 w-12 rounded-full flex items-center justify-center font-bold">500+</div>
            </div>
            <span className="ml-3 text-left">
              <span className="block text-sm">Success</span>
              <span className="block font-medium">Stories</span>
            </span>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white bg-opacity-20 p-2 rounded-full">
              <div className="bg-white text-primary-800 h-12 w-12 rounded-full flex items-center justify-center font-bold">6</div>
            </div>
            <span className="ml-3 text-left">
              <span className="block text-sm">Years of</span>
              <span className="block font-medium">Excellence</span>
            </span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;