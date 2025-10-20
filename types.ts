/**
 * Represents the available languages in the application.
 */
export type Language = 'en' | 'ar';

/**
 * Represents the available pages/screens in the application.
 */
export type Page = 'home' | 'learn' | 'games' | 'stories' | 'rewards' | 'settings' | 'matching-game' | 'subscribe' | 'color-quiz-game';

/**
 * Represents a single learning item, like a letter, number, or color.
 */
export interface LearningItem {
  id: string;
  display: string;
  word: string;
  imageUrl: string;
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