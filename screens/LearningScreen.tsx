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
  const { content, isSubscribed, setCurrentPage, language } = useAppContext();
  const [activeTab, setActiveTab] = useState<LearningCategory>('letters');

  const handleTabClick = (tab: LearningCategory) => {
    setActiveTab(tab);
  };
  
  /**
   * Handles clicks on learning items, providing pronunciation using the Web Speech API.
   * This implementation is robust for mobile devices where voices may load asynchronously.
   */
  const handleItemClick = (item: LearningItem) => {
    if (item.isPremium && !isSubscribed) {
      setCurrentPage('subscribe');
      return;
    }
    
    // Check for browser support for speech synthesis.
    if (!('speechSynthesis' in window)) {
        console.error("This browser does not support speech synthesis.");
        return;
    }

    // Stop any speech that might be ongoing from a previous click.
    window.speechSynthesis.cancel();
    
    let textToSpeak = '';
    const category = item.id.split('-')[1]; // 'l', 'n', or 'c'

    if (category === 'l') {
        // For letters, pronounce the letter and then the example word.
        textToSpeak = `${item.display}, ${item.word}`;
    } else if (category === 'n') {
        // For numbers, pronounce the word for the number.
        textToSpeak = item.word;
    } else if (category === 'c') {
        // For colors, pronounce the color name.
        textToSpeak = item.display;
    }

    if (!textToSpeak) return;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const targetLang = language === 'ar' ? 'ar-SA' : 'en-US';
    
    // Set properties for a more kid-friendly voice.
    utterance.lang = targetLang;
    utterance.rate = 0.9;
    utterance.pitch = 1.1;

    // This function finds the best available voice and triggers the speech.
    const speak = () => {
        const voices = window.speechSynthesis.getVoices();
        // Find the best matching voice for the current language.
        const voice = voices.find(v => v.lang === targetLang) || voices.find(v => v.lang.startsWith(language));
        
        if (voice) {
          utterance.voice = voice;
        }
        
        window.speechSynthesis.speak(utterance);
    };

    // Voices often load asynchronously, especially on mobile.
    // Check if they are already loaded.
    if (window.speechSynthesis.getVoices().length > 0) {
      speak();
    } else {
      // If voices are not ready, set up a listener to speak as soon as they are.
      // This is crucial for mobile browser compatibility.
      window.speechSynthesis.onvoiceschanged = speak;
    }
  };

  const learningData = {
    letters: content.letters,
    numbers: content.numbers,
    colors: content.colors,
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
        {/* SAFEGUARD: Use `|| []` to prevent a crash if the data array is temporarily undefined during a re-render. */}
        {(learningData[activeTab] || []).map((item) => {
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
