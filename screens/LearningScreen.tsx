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
      <div className="flex-grow p-4 overflow-y-auto grid grid-cols-2 gap-4">
        {learningData[activeTab].map((item) => {
          const isLocked = item.isPremium && !isSubscribed;
          return (
            <button 
              key={item.id} 
              onClick={() => handleItemClick(item)}
              className={`relative bg-white rounded-xl shadow-md overflow-hidden text-center active:scale-95 transition-transform ${isLocked ? 'cursor-pointer' : ''}`}
            >
              <img 
                src={item.imageUrl} 
                alt={item.word} 
                className={`w-full h-32 object-cover ${isLocked ? 'filter grayscale' : ''}`}
              />
              <div className="p-4">
                  <p className="text-5xl font-bold">{item.display}</p>
                  <p className="text-xl text-gray-600">{item.word}</p>
              </div>
              {isLocked && (
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white rounded-xl">
                  <span className="text-4xl">🔒</span>
                  <span className="font-bold mt-1">{content.learning.premium}</span>
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
