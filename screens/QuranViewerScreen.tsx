import React from 'react';
import Header from '../components/Header';
import { useAppContext } from '../hooks/useAppContext';

/**
 * Displays the verses of a single Quran surah for reading.
 */
const QuranViewerScreen: React.FC = () => {
    const { content, surahId, setSurahId } = useAppContext();
    
    // Find the surah data based on the ID from context
    const surah = content.quranSurahs.find(s => s.id === surahId);

    // Handler for the back button in the header
    const handleBack = () => {
        setSurahId(null);
    };

    // Render a message if the surah is not found
    if (!surah) {
        return (
            <div className="flex flex-col h-full">
                 <Header title="Error" />
                <div className="p-4 flex-grow flex items-center justify-center">
                    <p>Surah not found.</p>
                    <button onClick={handleBack} className="ms-4 text-brand-blue underline">Go Back</button>
                </div>
            </div>
        );
    }
    
    return (
        <div className="flex flex-col h-full bg-teal-50">
            {/* Use a custom back handler for the Header */}
            <header className="relative flex items-center justify-between p-4 bg-white shadow-md text-2xl font-bold h-20 shrink-0">
                <button
                    onClick={handleBack}
                    className="absolute start-4 p-2 rounded-full hover:bg-gray-200 active:scale-90 transition-transform"
                >
                    {content.language === 'ar' ? '→' : '←'}
                    <span className="sr-only">{content.header.back}</span>
                </button>
                <h1 className="text-center w-full text-brand-purple">{surah.name}</h1>
            </header>
            <div className="flex-grow p-6 overflow-y-auto" dir="rtl">
                <div className="space-y-6 text-4xl text-center leading-relaxed text-gray-800 font-cairo">
                    {surah.verses.map((verse, index) => (
                        <p key={index}>{verse}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuranViewerScreen;
