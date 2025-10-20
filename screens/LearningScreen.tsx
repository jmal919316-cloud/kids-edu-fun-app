
import React, { useState } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import Header from '../components/Header';
import type { LearningItem } from '../types';

type LearningCategory = 'letters' | 'numbers' | 'colors';

/**
 * The screen for educational content.
 * Users can switch between letters, numbers, and colors using tabs.
 */
const LearningScreen: React.FC = () => {
  const { content } = useAppContext();
  const [activeTab, setActiveTab] = useState<LearningCategory>('letters');

  const learningData: { [key in LearningCategory]: LearningItem[] } = {
    letters: content.letters,
    numbers: content.numbers,
    colors: content.colors,
  };
  
  const handleTabClick = (tab: LearningCategory) => {
      setActiveTab(tab);
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
        {learningData[activeTab].map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden text-center active:scale-95 transition-transform">
            <img src={item.imageUrl} alt={item.word} className="w-full h-32 object-cover"/>
            <div className="p-4">
                <p className="text-5xl font-bold">{item.display}</p>
                <p className="text-xl text-gray-600">{item.word}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningScreen;
