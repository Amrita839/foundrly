
import React from 'react';

interface ActionButtonsProps {
  onLike: () => void;
  onDislike: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onLike, onDislike }) => {
  return (
    <div className="flex justify-center gap-8 mt-8">
      <button 
        className="button-dislike"
        onClick={onDislike}
        aria-label="Dislike"
      >
        ✖
      </button>
      
      <button 
        className="button-like"
        onClick={onLike}
        aria-label="Like"
      >
        ✓
      </button>
    </div>
  );
};

export default ActionButtons;
