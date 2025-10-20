/**
 * Represents the available languages in the application.
 */
export type Language = 'en' | 'ar';

/**
 * Represents the available pages/screens in the application.
 */
export type Page = 'home' | 'learn' | 'games' | 'stories' | 'rewards' | 'settings' | 'matching-game' | 'subscribe' | 'color-quiz-game' | 'quran';

/**
 * Represents a single learning item, like a letter, number, or color.
 */
export interface LearningItem {
  id: string;
  display: string;
  word: string;
  imageUrl: string;
  audioUrl: string; // Path to the audio file for pronunciation
  isPremium?: boolean; // Optional: true if this item requires a subscription
  colorHex?: string; // Optional: hex code for color items
}

/**
 * Represents a short story.
 */
export interface Story {
  id: string;
  title: string;
  content: string[];
  imageUrl: string;
  isPremium: boolean;
}

/**
 * Represents a short surah from the Quran.
 */
export interface QuranSurah {
  id: string;
  name: string;
  englishName: string;
  imageUrl: string;
  audioUrl: string;
  verses: string[]; // Holds the Arabic text for each verse
}

/**
 * Defines the structure for a card in the matching game.
 */
export interface GameCard {
  id: string;
  content: string;
  imageUrl: string;
  matchId: string;
}

/**
 * Defines the structure for a question in the color quiz game.
 */
export interface ColorQuizQuestion {
    colorName: string;
    correctColorHex: string;
    options: string[]; // Array of hex color codes
}