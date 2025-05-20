
import React from 'react';
import Header from '@/components/Header';
import SwipeContainer from '@/components/SwipeContainer';
import { motion } from 'framer-motion';

const Explore = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section for Explore page */}
        <motion.div 
          className="text-center mb-10 mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal via-lavender to-teal bg-clip-text text-transparent">Discover Ideas</h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Swipe through innovative startup ideas and find your next big opportunity
          </p>
        </motion.div>
        
        {/* Main Swipe Container */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SwipeContainer />
        </motion.div>
      </main>
      
      <footer className="bg-card py-4 mt-auto border-t border-border">
        <div className="container mx-auto px-4 text-center text-foreground/70">
          <p>Foundrly &copy; {new Date().getFullYear()}</p>
          <p className="text-sm mt-1">Discover, collaborate, innovate</p>
        </div>
      </footer>
    </div>
  );
};

export default Explore;
