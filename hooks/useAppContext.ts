
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

/**
 * Custom hook for accessing the application context.
 * Throws an error if used outside of an AppProvider.
 * @returns The application context.
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
