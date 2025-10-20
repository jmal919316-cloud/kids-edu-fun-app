import React from 'react';
import Header from '../components/Header';
import { useAppContext } from '../hooks/useAppContext';
import type { Page } from '../types';

interface GameButtonProps {
    label: string;
    icon: string;
    color: string;
    page: Page;
    isPremium?: boolean;
}

/**
 * A menu screen to select different games to play.
 */
const GamesScreen: React.FC = () => {
    const { content, setCurrentPage, isSubscribed } = useAppContext();

    const handleGameClick = (page: Page, isPremium?: boolean) => {
        if(isPremium && !isSubscribed) {
            setCurrentPage('subscribe');
        } else {
            setCurrentPage(page);
        }
    }

    const gameList: GameButtonProps[] = [
        {
            label: content.games.matchingGame,
            icon: '🖼️',
            color: 'bg-brand-green',
            page: 'matching-game',
            isPremium: false,
        },
        {
            label: content.games.colorQuizGame,
            icon: '🎨',
            color: 'bg-brand-purple',
            page: 'color-quiz-game',
            isPremium: true,
        }
    ]

    return (
        <div className="flex flex-col h-full">
            <Header title={content.games.title} backPage="home" />
            <div className="p-8 space-y-4">
                {gameList.map(game => {
                    const isLocked = game.isPremium && !isSubscribed;
                    return (
                        <button
                            key={game.page}
                            onClick={() => handleGameClick(game.page, game.isPremium)}
                            className={`w-full ${game.color} text-white p-6 rounded-2xl shadow-lg flex items-center justify-center text-3xl font-bold active:scale-95 transition-transform relative`}
                        >
                            <span className="text-5xl me-4">{game.icon}</span>
                            {game.label}
                            {isLocked && (
                                <div className="absolute top-2 end-2 bg-yellow-400 text-yellow-800 text-2xl rounded-full p-2">
                                    🔒
                                </div>
                            )}
                        </button>
                    )
                })}
                 {/* Add more game buttons here in the future */}
            </div>
        </div>
    );
};

export default GamesScreen;
