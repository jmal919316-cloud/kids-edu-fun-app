
import React, { createContext, useState, ReactNode, useEffect } from 'react';
import type { Language, Page } from '../types';
import { contentData } from '../data/content';

/**
 * Defines the shape of the application's global context.
 */
interface AppContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  languageSelected: boolean;
  setLanguageSelected: (selected: boolean) => void;
  points: number;
  addPoints: (amount: number) => void;
  isSubscribed: boolean;
  setIsSubscribed: (subscribed: boolean) => void;
  currentPage: Page | string;
  setCurrentPage: (page: Page | string) => void;
  content: typeof contentData.en;
  storyId: string | null;
  setStoryId: (id: string | null) => void;
  surahId: string | null;
  setSurahId: (id: string | null) => void;
}

// Create the context with a default value.
export const AppContext = createContext<AppContextType | undefined>(undefined);

/**
 * Provides the global state to all components wrapped within it.
 */
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // State management
  const [language, setLanguageState] = useState<Language>('en');
  const [languageSelected, setLanguageSelected] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<Page | string>('home');
  const [content, setContent] = useState(contentData.en);
  const [storyId, setStoryId] = useState<string | null>(null);
  const [surahId, setSurahId] = useState<string | null>(null);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setContent(contentData[lang]);
    if (!languageSelected) {
      setLanguageSelected(true);
    }
  };
  
  const addPoints = (amount: number) => {
    setPoints(prevPoints => prevPoints + amount);
  };
  
  const value = {
    language,
    setLanguage,
    languageSelected,
    setLanguageSelected,
    points,
    addPoints,
    isSubscribed,
    setIsSubscribed,
    currentPage,
    setCurrentPage,
    content,
    storyId,
    setStoryId,
    surahId,
    setSurahId,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};