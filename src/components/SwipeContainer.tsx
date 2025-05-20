
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SwipeCard from './SwipeCard';
import { StartupIdea } from '../types/types';
import { mockIdeas } from '../data/mockData';
import { useToast } from '@/hooks/use-toast';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const SwipeContainer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ideas, setIdeas] = useState<StartupIdea[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, we would fetch from API
    setIdeas(mockIdeas);
  }, []);

  const handleLike = () => {
    if (currentIndex < ideas.length) {
      toast({
        title: "Liked!",
        description: `You liked the idea: ${ideas[currentIndex].title}`,
      });
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleDislike = () => {
    if (currentIndex < ideas.length) {
      toast({
        title: "Passed",
        description: `You passed on the idea: ${ideas[currentIndex].title}`,
        variant: "destructive",
      });
      setCurrentIndex(prev => prev + 1);
    }
  };

  // Check if we've gone through all ideas
  const isFinished = currentIndex >= ideas.length;

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative h-auto w-full max-w-xl flex items-center justify-center mb-8">
        {isFinished ? (
          <motion.div 
            className="text-center p-8 bg-gray-900 rounded-xl shadow-lg border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">No more ideas!</h2>
            <p className="mb-6 text-gray-300">You've seen all available startup ideas.</p>
            <motion.button 
              className="bg-teal text-white px-6 py-3 rounded-md hover:bg-teal/80 transition-colors"
              onClick={() => setCurrentIndex(0)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Over
            </motion.button>
          </motion.div>
        ) : (
          ideas.slice(currentIndex, currentIndex + 1).map((idea) => (
            <SwipeCard
              key={idea.id}
              idea={idea}
              onSwipeLeft={handleDislike}
              onSwipeRight={handleLike}
            />
          ))
        )}
      </div>
      
      {!isFinished && (
        <div className="text-center mt-8 text-gray-400">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="mb-2">Swipe right or tap <ThumbsUp size={16} className="inline text-teal mx-1" /> to save ideas you like</p>
            <p>Swipe left or tap <ThumbsDown size={16} className="inline text-coral mx-1" /> to pass on ideas that don't interest you</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SwipeContainer;
