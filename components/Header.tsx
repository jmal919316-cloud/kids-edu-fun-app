
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import type { Page } from '../types';

interface HeaderProps {
  title: string;
  backPage?: Page;
}

/**
 * A reusable header component for screens.
 * Displays the page title, a back button (if `backPage` is provided),
 * and the user's current points total.
 */
const Header: React.FC<HeaderProps> = ({ title, backPage }) => {
  const { points, setCurrentPage, content, language } = useAppContext();

  return (
    <header className="relative flex items-center justify-between p-4 bg-white shadow-md text-2xl font-bold h-20 shrink-0">
      {backPage && (
        <button
          onClick={() => setCurrentPage(backPage)}
          className="absolute start-4 p-2 rounded-full hover:bg-gray-200 active:scale-90 transition-transform"
        >
          {language === 'ar' ? '→' : '←'}
          <span className="sr-only">{content.header.back}</span>
        </button>
      )}
      <h1 className="text-center w-full text-brand-purple">{title}</h1>
      <div className="absolute end-4 flex items-center space-x-2 rtl:space-x-reverse text-lg bg-brand-yellow text-white px-3 py-1 rounded-full">
        <span>⭐</span>
        <span className="font-bold">{points}</span>
        <span className="sr-only">{content.header.points}</span>
      </div>
    </header>
  );
};

export default Header;
