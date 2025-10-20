import React, { useState, useEffect } from 'react';
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
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  // Effect to load speech synthesis voices, ensuring mobile compatibility.
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
      }
    };

    // The 'voiceschanged' event is crucial, especially on mobile, as voices are loaded asynchronously.
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
    // Call it once initially in case voices are already loaded.
    loadVoices();

    // Cleanup the event listener on component unmount.
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
      // Stop any speech that might be ongoing when the user navigates away.
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleTabClick = (tab: LearningCategory) => {
    setActiveTab(tab);
  };
  
  const handleItemClick = (item: LearningItem) => {
    if (item.isPremium && !isSubscribed) {
      setCurrentPage('subscribe');
    } else {
      // Use Web Speech API to pronounce the word, checking for voice readiness.
      if ('speechSynthesis' in window && voices.length > 0) {
        // Stop any currently speaking utterance to prevent overlap.
        window.speechSynthesis.cancel();
        
        let textToSpeak = '';
        const category = item.id.split('-')[1]; // 'l' for letter, 'n' for number, 'c' for color

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

        if (textToSpeak) {
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            
            // Find a suitable voice for the selected language for better pronunciation.
            const targetLang = language === 'ar' ? 'ar-SA' : 'en-US';
            const voice = voices.find(v => v.lang === targetLang) || voices.find(v => v.lang.startsWith(language));
            
            if (voice) {
              utterance.voice = voice;
            } else {
              // Fallback to setting the lang property if no specific voice is found.
              utterance.lang = targetLang;
            }
            
            // Adjust rate and pitch to be more kid-friendly.
            utterance.rate = 0.9;
            utterance.pitch = 1.1;

            window.speechSynthesis.speak(utterance);
        }
      } else {
          console.warn('Web Speech API is not supported or voices are not loaded yet.');
      }
    }
  };

  // FIX: The 'learningData' variable was not defined.
  // This object maps the active tab to the corresponding data from the context.
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