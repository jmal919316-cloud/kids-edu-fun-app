
import React from 'react';
import Header from '../components/Header';
import { useAppContext } from '../hooks/useAppContext';

/**
 * A menu screen to select different games to play.
 */
const GamesScreen: React.FC = () => {
    const { content, setCurrentPage } = useAppContext();

    return (
        <div className="flex flex-col h-full">
            <Header title={content.games.title} backPage="home" />
            <div className="p-8 space-y-4">
                <button
                    onClick={() => setCurrentPage('matching-game')}
                    className="w-full bg-brand-green text-white p-6 rounded-2xl shadow-lg flex items-center justify-center text-3xl font-bold active:scale-95 transition-transform"
                >
                    <span className="text-5xl mr-4 rtl:mr-0 rtl:ml-4">🖼️</span>
                    {content.games.matchingGame}
                </button>
                 {/* Add more game buttons here in the future */}
            </div>
        </div>
    );
};

export default GamesScreen;
