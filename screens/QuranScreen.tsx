import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import { useAppContext } from '../hooks/useAppContext';
import type { QuranSurah } from '../types';

/**
 * Displays a list of Quran surahs for listening.
 * Includes an audio player to play the recitation of each surah.
 */
const QuranScreen: React.FC = () => {
    const { content } = useAppContext();
    const [playingId, setPlayingId] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlayPause = (surah: QuranSurah) => {
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
            <div className="p-4 space-y-4 overflow-y-auto">
                {content.quranSurahs.map(surah => {
                    const isPlaying = playingId === surah.id;
                    return (
                        <div
                            key={surah.id}
                            className="w-full flex items-center bg-white rounded-xl shadow-md p-4"
                        >
                            <img src={surah.imageUrl} alt={surah.name} className="w-24 h-24 rounded-lg object-cover me-4 shrink-0"/>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-brand-teal">{surah.name}</h3>
                                <p className="text-gray-500">{surah.englishName}</p>
                            </div>
                            <button
                                onClick={() => handlePlayPause(surah)}
                                className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shrink-0 transition-colors ${isPlaying ? 'bg-brand-pink' : 'bg-brand-teal'}`}
                                aria-label={isPlaying ? `Pause ${surah.name}` : `Play ${surah.name}`}
                            >
                                {isPlaying ? '❚❚' : '▶'}
                            </button>
                        </div>
                    );
                })}
            </div>
            {/* Hidden audio element for playback */}
            <audio ref={audioRef} className="hidden" />
        </div>
    );
};

export default QuranScreen;