
import React from 'react';
import Header from '../components/Header';
import { useAppContext } from '../hooks/useAppContext';

/**
 * Displays the user's total points and achievements.
 */
const RewardsScreen: React.FC = () => {
    const { content, points } = useAppContext();

    return (
        <div className="flex flex-col h-full">
            <Header title={content.rewards.title} backPage="home" />
            <div className="flex-grow flex flex-col items-center justify-center text-center p-8 bg-yellow-50">
                <div className="text-8xl mb-4">🏆</div>
                <p className="text-2xl text-gray-600">{content.rewards.yourPoints}</p>
                <p className="text-7xl font-bold text-brand-yellow my-2">{points}</p>
                <p className="text-2xl text-gray-600">{content.header.points}</p>
                <p className="mt-8 text-lg text-gray-500">{content.rewards.keepLearning}</p>
            </div>
        </div>
    );
};

export default RewardsScreen;
