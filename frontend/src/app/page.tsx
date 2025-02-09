'use client'


// pages/index.tsx (or app/page.tsx if you're using the new Next.js app directory)
import { useState } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Category from '../components/Category';
import Trust from '../components/Trust';
import Footer from '../components/Footer';

export default function HomePage() {
  // State to store the search query from Hero.tsx
  const [searchQuery, setSearchQuery] = useState('');
  // State to store the categories (populated by Hero.tsx)
  const [categories, setCategories] = useState<{ title: string; description: string }[]>([]);

  return (
    <div>
      
      <Nav />
      <Hero onSearch={setSearchQuery} onCategories={setCategories} />
      <Category categories={categories} searchQuery={searchQuery} />
      {/* Pass the setSearchQuery and setCategories functions to Hero */}
      
      {/* Pass the categories data and the current search query to Categories */}
      
      <Trust />
      <Footer />
    </div>
  );
}
