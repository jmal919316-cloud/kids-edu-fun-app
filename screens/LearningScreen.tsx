import React, { useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import Header from '../components/Header';
import type { LearningItem } from '../types';

type LearningCategory = 'letters' | 'numbers' | 'colors';

/**
 * The screen for educational content.
 * Users can switch between letters, numbers, and colors using tabs.
 * Premium items are locked for non-subscribed users.
 */
const LearningScreen: React.FC = () => {
  const { content, isSubscribed, setCurrentPage } = useAppContext();
  const [activeTab, setActiveTab] = useState<LearningCategory>('letters');

  const learningData: { [key in LearningCategory]: LearningItem[] } = {
    letters: content.letters,
    numbers: content.numbers,
    colors: content.colors,
  };
  
  const handleTabClick = (tab: LearningCategory) => {
      setActiveTab(tab);
  };
  
  const handleItemClick = (item: LearningItem) => {
    if(item.isPremium && !isSubscribed) {
        setCurrentPage('subscribe');
    }
    // In a real app, you might play a sound or show a detail view here
  };

  return (
    <div className="flex flex-col h-full">
      <Header title={content.learning.title} backPage="home" />
      <div className="flex justify-around bg-gray-100 p-2 shrink-0">
        <button onClick={() => handleTabClick('letters')} className={`px-4 py-2 rounded-lg text-lg font-bold ${activeTab === 'letters' ? 'bg-brand-blue text-white' : 'bg-white'}`}>{content.learning.letters}</button>
        <button onClick={() => handleTabClick('numbers')} className={`px-4 py-2 rounded-lg text-lg font-bold ${activeTab === 'numbers' ? 'bg-brand-green text-white' : 'bg-white'}`}>{content.learning.numbers}</button>
        <button onClick={() => handleTabClick('colors')} className={`px-4 py-2 rounded-lg text-lg font-bold ${activeTab === 'colors' ? 'bg-brand-pink text-white' : 'bg-white'}`}>{content.learning.colors}</button>
      </div>
      <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-4">
        {learningData[activeTab].map((item) => {
          const isLocked = !!item.isPremium && !isSubscribed;
          const isColorTab = activeTab === 'colors';

          return (
            <button 
              key={item.id} 
              onClick={() => handleItemClick(item)}
              className="relative w-full flex items-center bg-white rounded-2xl shadow-lg p-4 active:scale-95 transition-transform text-left rtl:text-right"
              aria-disabled={isLocked}
            >
              {isColorTab && item.colorHex ? (
                // Color Swatch
                <div 
                  className={`flex-shrink-0 w-24 h-24 rounded-2xl me-4 border-2 border-gray-200 shadow-inner ${isLocked ? 'filter grayscale' : ''}`}
                  style={{ backgroundColor: item.colorHex }}
                  aria-label={item.display}
                ></div>
              ) : (
                // Letter/Number Box
                <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-sky-100 rounded-2xl me-4">
                  <span className={`text-6xl font-bold text-brand-purple ${isLocked ? 'opacity-50' : ''}`}>{item.display}</span>
                </div>
              )}
      
              {/* Word and Image */}
              <div className="flex-grow">
                  <p className={`text-4xl font-bold text-gray-700 ${isLocked ? 'opacity-50' : ''}`}>
                    {isColorTab ? item.display : item.word}
                  </p>
                  {isColorTab && (
                    <p className={`text-2xl text-gray-500 ${isLocked ? 'opacity-50' : ''}`}>
                      {item.word}
                    </p>
                  )}
              </div>
              <img 
                  src={item.imageUrl} 
                  alt={item.word} 
                  className={`w-24 h-24 object-cover rounded-lg shadow-sm flex-shrink-0 ${isLocked ? 'filter grayscale' : ''}`}
              />
            
              {isLocked && (
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white rounded-2xl cursor-pointer">
                  <span className="text-5xl">🔒</span>
                  <span className="font-bold mt-2 text-lg">{content.learning.premium}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LearningScreen;