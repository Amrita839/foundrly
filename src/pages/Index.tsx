
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { Sparkles, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section - Enhanced for landing page */}
        <motion.div 
          className="text-center mb-16 mt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal via-lavender to-teal bg-clip-text text-transparent">Foundrly</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Connect with innovative ideas and find your perfect startup match
          </p>
          <Link to="/explore">
            <Button className="bg-teal hover:bg-teal/80 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105">
              Start Exploring
            </Button>
          </Link>
        </motion.div>
        
        {/* Features Section - Now with clickable boxes */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/explore" className="block">
            <div className="bg-card p-8 rounded-xl text-center border border-border hover:border-teal transition-colors shadow-lg hover:shadow-teal/10 h-full">
              <div className="flex justify-center mb-4">
                <Sparkles className="w-10 h-10 text-teal" />
              </div>
              <h2 className="text-xl font-bold mb-3">Innovative Ideas</h2>
              <p className="text-foreground/70">Explore curated startup ideas from creative minds around the world</p>
            </div>
          </Link>
          
          <Link to="/community" className="block">
            <div className="bg-card p-8 rounded-xl text-center border border-border hover:border-teal transition-colors shadow-lg hover:shadow-teal/10 h-full">
              <div className="flex justify-center mb-4">
                <Users className="w-10 h-10 text-teal" />
              </div>
              <h2 className="text-xl font-bold mb-3">Community</h2>
              <p className="text-foreground/70">Connect with entrepreneurs and investors who share your passion</p>
            </div>
          </Link>
          
          <Link to="/submit" className="block">
            <div className="bg-card p-8 rounded-xl text-center border border-border hover:border-teal transition-colors shadow-lg hover:shadow-teal/10 h-full">
              <div className="flex justify-center mb-4">
                <Target className="w-10 h-10 text-teal" />
              </div>
              <h2 className="text-xl font-bold mb-3">Validation</h2>
              <p className="text-foreground/70">Get immediate feedback on ideas and refine your concept</p>
            </div>
          </Link>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          className="text-center py-16 bg-gradient-to-r from-card/80 to-background rounded-2xl border border-border max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to find your next opportunity?</h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">Join our community of innovators, entrepreneurs, and visionaries today.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/explore">
              <Button className="bg-teal hover:bg-teal/80 text-white">
                Explore Ideas
              </Button>
            </Link>
            <Link to="/submit">
              <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
                Submit Your Idea
              </Button>
            </Link>
          </div>
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

export default Index;
