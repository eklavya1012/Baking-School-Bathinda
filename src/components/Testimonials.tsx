import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-500"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-accent-500"></div>
        <div className="absolute -bottom-32 left-1/4 w-64 h-64 rounded-full bg-primary-700"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Success Stories</h2>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Hear from our graduates who have transformed their passion for baking into thriving careers and businesses.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-10 -left-8 text-primary-500 opacity-30">
              <Quote size={72} />
            </div>
            
            <div className="transition-all duration-500">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-opacity duration-500 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                  }`}
                >
                  {index === activeIndex && (
                    <div className="bg-primary-800 rounded-xl p-8 md:p-10 shadow-xl">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="flex-shrink-0">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-primary-600 object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-lg md:text-xl leading-relaxed mb-6 italic text-primary-100">
                            "{testimonial.content}"
                          </p>
                          <div>
                            <h4 className="font-display font-semibold text-xl">{testimonial.name}</h4>
                            <p className="text-primary-300">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  index === activeIndex
                    ? 'bg-accent-500 w-8'
                    : 'bg-primary-700 hover:bg-primary-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;