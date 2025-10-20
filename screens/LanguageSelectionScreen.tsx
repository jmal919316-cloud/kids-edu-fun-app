
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';

/**
 * The first screen the user sees.
 * Allows the user to select between English and Arabic.
 */
const LanguageSelectionScreen: React.FC = () => {
  const { setLanguage, content } = useAppContext();

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-brand-blue to-brand-green p-8">
        <div className="text-center bg-white/50 p-8 rounded-2xl shadow-lg">
            <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-md">
                {content.languageSelection.title}
            </h1>
            <div className="space-y-4">
                <button
                    onClick={() => setLanguage('en')}
                    className="w-full text-2xl font-bold text-white bg-brand-pink py-4 px-8 rounded-full shadow-lg transform hover:scale-105 active:scale-100 transition-transform"
                >
                    {content.languageSelection.english}
                </button>
                <button
                    onClick={() => setLanguage('ar')}
                    className="w-full text-2xl font-bold text-white bg-brand-purple py-4 px-8 rounded-full shadow-lg transform hover:scale-105 active:scale-100 transition-transform font-cairo"
                >
                    {content.languageSelection.arabic}
                </button>
            </div>
        </div>
    </div>
  );
};

export default LanguageSelectionScreen;
