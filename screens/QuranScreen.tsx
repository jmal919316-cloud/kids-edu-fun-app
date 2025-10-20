import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import { useAppContext } from '../hooks/useAppContext';
import type { QuranSurah } from '../types';

/**
 * Displays a list of Quran surahs for listening and reading.
 * Clicking the card opens a viewer for the text.
 * Clicking the play button plays the recitation.
 */
const QuranScreen: React.FC = () => {
    const { content, setSurahId } = useAppContext();
    const [playingId, setPlayingId] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleViewSurah = (surahId: string) => {
        setSurahId(surahId);
    };

    const handlePlayPause = (e: React.MouseEvent, surah: QuranSurah) => {
        e.stopPropagation(); // Prevent the card's onClick from firing
        if (audioRef.current) {
            if (playingId === surah.id) {
                // If the clicked surah is already playing, pause it
                audioRef.current.pause();
                setPlayingId(null);
            } else {
                // If a new surah is clicked, play it
                audioRef.current.src = surah.audioUrl;
                audioRef.current.play();
                setPlayingId(surah.id);
            }
        }
    };

    // Effect to handle the end of audio playback
    useEffect(() => {
        const audioElement = audioRef.current;
        const onEnded = () => setPlayingId(null);

        if (audioElement) {
            audioElement.addEventListener('ended', onEnded);
        }

        // Cleanup listener on component unmount
        return () => {
            if (audioElement) {
                audioElement.removeEventListener('ended', onEnded);
            }
        };
    }, []);

    return (
        <div className="flex flex-col h-full bg-teal-50">
            <Header title={content.quran.title} backPage="home" />
            <div className="p-4 grid grid-cols-2 gap-4 overflow-y-auto">
                {content.quranSurahs.map(surah => {
                    const isPlaying = playingId === surah.id;
                    return (
                        <button 
                            key={surah.id} 
                            onClick={() => handleViewSurah(surah.id)}
                            className="bg-white rounded-2xl shadow-lg p-3 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-brand-teal"
                        >
                            <img src={surah.imageUrl} alt={surah.name} className="w-full h-28 rounded-xl object-cover mb-3"/>
                            <div className="flex-grow flex flex-col justify-center mb-2">
                                <h3 className="text-xl font-bold text-brand-teal">{surah.name}</h3>
                                <p className="text-gray-500">{surah.englishName}</p>
                            </div>
                            <div
                                role="button"
                                onClick={(e) => handlePlayPause(e, surah)}
                                className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl shrink-0 transition-all duration-200 active:scale-90 shadow-md ${isPlaying ? 'bg-brand-pink' : 'bg-brand-teal'}`}
                                aria-label={isPlaying ? `Pause ${surah.name}` : `Play ${surah.name}`}
                            >
                                {isPlaying ? '❚❚' : '▶'}
                            </div>
                        </button>
                    );
                })}
            </div>
            {/* Hidden audio element for playback */}
            <audio ref={audioRef} className="hidden" />
        </div>
    );
};

export default QuranScreen;