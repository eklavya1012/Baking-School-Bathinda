import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Set page title
  useEffect(() => {
    document.title = 'The Baking School | Bathinda, Punjab';
  }, []);

  return (
    <div className="min-h-screen bg-secondary-50">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;