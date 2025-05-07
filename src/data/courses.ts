import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Fundamentals of Baking',
    description: 'Master the essential baking techniques with our comprehensive foundational course. Learn about different types of flour, leavening agents, mixing methods, and basic pastry skills that will set you up for success.',
    duration: '4 weeks',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/6287475/pexels-photo-6287475.jpeg',
    featured: true,
    price: '₹12,500',
    categories: ['Fundamentals', 'Certificate']
  },
  {
    id: '2',
    title: 'Artisan Bread Making',
    description: 'Dive into the world of artisan bread with traditional methods and modern techniques. Learn to create crusty sourdough, rustic baguettes, flavorful focaccia, and more using natural fermentation.',
    duration: '3 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg',
    price: '₹10,000',
    categories: ['Bread', 'Artisan']
  },
  {
    id: '3',
    title: 'Cake Decoration Masterclass',
    description: 'Elevate your cake decorating skills with advanced techniques in buttercream, fondant work, sugar flowers, and modern design trends. Create stunning celebration cakes for any occasion.',
    duration: '6 weeks',
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg',
    featured: true,
    price: '₹18,000',
    categories: ['Decoration', 'Advanced']
  },
  {
    id: '4',
    title: 'Pastry Essentials',
    description: 'Learn the art of French pastry including puff pastry, choux, shortcrust, and sweet dough. Create classic pastries like croissants, éclairs, tarts, and more with professional techniques.',
    duration: '5 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg',
    price: '₹15,000',
    categories: ['Pastry', 'French']
  },
  {
    id: '5',
    title: 'Indian Sweets & Desserts',
    description: 'Explore the rich tradition of Indian mithai and desserts. Learn to prepare traditional sweets with modern techniques and presentation styles perfect for celebrations and business opportunities.',
    duration: '3 weeks',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/14705141/pexels-photo-14705141.jpeg',
    price: '₹9,000',
    categories: ['Indian', 'Cultural']
  },
  {
    id: '6',
    title: 'Chocolate Making & Confectionery',
    description: 'Discover the art of working with chocolate—tempering, molding, and creating artisanal confections. Learn to make truffles, bonbons, pralines, and showpiece elements.',
    duration: '4 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg',
    featured: true,
    price: '₹14,000',
    categories: ['Chocolate', 'Confectionery']
  }
];