
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import type { Page } from '../types';

interface MenuButtonProps {
  label: string;
  color: string;
  icon: string;
  onClick: () => void;
}

// Internal component for menu buttons to avoid re-rendering issues
const MenuButton: React.FC<MenuButtonProps> = ({ label, color, icon, onClick }) => (
  <button
    onClick={onClick}
    className={`${color} text-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center transform hover:scale-105 active:scale-95 transition-transform duration-200`}
  >
    <span className="text-6xl mb-2">{icon}</span>
    <span className="text-2xl font-bold">{label}</span>
  </button>
);

/**
 * The main menu screen of the application.
 */
const HomeScreen: React.FC = () => {
  const { setCurrentPage, content } = useAppContext();

  const menuItems: { label: string; icon: string; color: string; page: Page }[] = [
    { label: content.home.startLearning, icon: '🎓', color: 'bg-brand-blue', page: 'learn' },
    { label: content.home.stories, icon: '📚', color: 'bg-brand-pink', page: 'stories' },
    { label: content.home.games, icon: '🎮', color: 'bg-brand-green', page: 'games' },
    { label: content.home.rewards, icon: '🏆', color: 'bg-brand-yellow', page: 'rewards' },
    { label: content.home.settings, icon: '⚙️', color: 'bg-brand-purple', page: 'settings' },
  ];

  return (
    <div className="flex flex-col h-full bg-sky-50">
      <div className="p-8 text-center bg-white shadow-md">
        <h1 className="text-4xl font-bold text-brand-purple">Fun Learn</h1>
      </div>
      <div className="flex-grow p-6 grid grid-cols-2 gap-6">
        {menuItems.map((item) => (
          <MenuButton
            key={item.page}
            label={item.label}
            icon={item.icon}
            color={item.color}
            onClick={() => setCurrentPage(item.page)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
