
import React, { useState } from 'react';
import { StartupIdea } from '../types/types';
import { ThumbsDown, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface SwipeCardProps {
  idea: StartupIdea;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ idea, onSwipeLeft, onSwipeRight }) => {
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<null | 'left' | 'right'>(null);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleMove = (clientX: number) => {
    if (isDragging) {
      const currentOffset = clientX - startX;
      setOffsetX(currentOffset);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    
    // Determine whether this is a swipe based on offset distance
    const threshold = 100;
    
    if (offsetX > threshold) {
      setSwipeDirection('right');
      setTimeout(() => {
        onSwipeRight();
        setSwipeDirection(null);
        setOffsetX(0);
      }, 500); // match the animation duration
    } else if (offsetX < -threshold) {
      setSwipeDirection('left');
      setTimeout(() => {
        onSwipeLeft();
        setSwipeDirection(null);
        setOffsetX(0);
      }, 500); // match the animation duration
    } else {
      // Not enough movement, reset position
      setOffsetX(0);
    }
  };

  // Calculate rotation based on offset
  const rotation = offsetX * 0.05;
  
  // Determine animation class based on swipe direction
  let animationClass = '';
  if (swipeDirection === 'left') {
    animationClass = 'animate-swipe-left';
  } else if (swipeDirection === 'right') {
    animationClass = 'animate-swipe-right';
  }
  
  // Calculate the opacity of like/dislike indicators
  const likeOpacity = offsetX > 0 ? Math.min(offsetX / 100, 1) : 0;
  const dislikeOpacity = offsetX < 0 ? Math.min(-offsetX / 100, 1) : 0;

  return (
    <motion.div 
      className={`swipe-card max-w-md w-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 ${animationClass}`}
      style={{
        transform: isDragging || swipeDirection ? `translateX(${offsetX}px) rotate(${rotation}deg)` : 'none',
        transition: isDragging ? 'none' : 'transform 0.5s ease'
      }}
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={() => handleEnd()}
      onMouseLeave={() => isDragging && handleEnd()}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={() => handleEnd()}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Like indicator */}
      <div 
        className="absolute top-10 right-10 bg-teal text-white text-xl font-bold py-2 px-4 rounded-lg transform rotate-12 pointer-events-none border-4 border-white z-10"
        style={{ opacity: likeOpacity }}
      >
        LIKE
      </div>
      
      {/* Dislike indicator */}
      <div 
        className="absolute top-10 left-10 bg-coral text-white text-xl font-bold py-2 px-4 rounded-lg transform -rotate-12 pointer-events-none border-4 border-white z-10"
        style={{ opacity: dislikeOpacity }}
      >
        NOPE
      </div>
      
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-3 text-white">{idea.title}</h2>
        <p className="text-gray-400 mb-4">{idea.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 p-3 rounded-lg">
            <h3 className="text-sm text-gray-400">Market Size</h3>
            <p className="text-white">Growing</p>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h3 className="text-sm text-gray-400">Timeline</h3>
            <p className="text-white">6-12 months</p>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h3 className="text-sm text-gray-400">Technical Requirements</h3>
            <p className="text-white">{idea.tags.join(', ')}</p>
          </div>
          <div className="bg-gray-800 p-3 rounded-lg">
            <h3 className="text-sm text-gray-400">Key Challenges</h3>
            <p className="text-white">Competition</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-400">
            Posted by {idea.author}
            <div className="text-xs text-gray-500 mt-1">{idea.dateCreated}</div>
          </div>
          
          <div className="flex gap-4">
            <motion.div 
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onSwipeLeft}
            >
              <ThumbsDown size={18} className="text-coral" />
            </motion.div>
            
            <motion.div 
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageCircle size={18} className="text-white" />
            </motion.div>
            
            <motion.div 
              className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Share2 size={18} className="text-white" />
            </motion.div>
            
            <motion.div 
              className="w-11 h-11 flex items-center justify-center bg-white rounded-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onSwipeRight}
            >
              <ThumbsUp size={20} className="text-teal" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SwipeCard;
