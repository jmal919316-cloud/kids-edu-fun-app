import React, { useEffect } from 'react';
import { useAppContext } from './hooks/useAppContext';
import LanguageSelectionScreen from './screens/LanguageSelectionScreen';
import HomeScreen from './screens/HomeScreen';
import LearningScreen from './screens/LearningScreen';
import GamesScreen from './screens/GamesScreen';
import StoriesScreen from './screens/StoriesScreen';
import RewardsScreen from './screens/RewardsScreen';
import SettingsScreen from './screens/SettingsScreen';
import AdBanner from './components/AdBanner';
import MatchingGameScreen from './screens/MatchingGameScreen';
import StoryViewerScreen from './screens/StoryViewerScreen';
import SubscriptionScreen from './screens/SubscriptionScreen';
import ColorQuizGameScreen from './screens/ColorQuizGameScreen';

/**
 * The main component of the application.
 * It acts as a router to display different screens based on the current state.
 */
const App: React.FC = () => {
  const { language, languageSelected, currentPage, storyId } = useAppContext();

  // Effect to update the document's language and direction attributes for styling
  useEffect(() => {
    if (language) {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [language]);

  const renderContent = () => {
    if (!languageSelected) {
      return <LanguageSelectionScreen />;
    }

    switch (currentPage) {
      case 'home':
        return <HomeScreen />;
      case 'learn':
        return <LearningScreen />;
      case 'games':
        return <GamesScreen />;
      case 'matching-game':
        return <MatchingGameScreen />;
      case 'color-quiz-game':
        return <ColorQuizGameScreen />;
      case 'stories':
        return storyId ? <StoryViewerScreen /> : <StoriesScreen />;
      case 'rewards':
        return <RewardsScreen />;
      case 'settings':
        return <SettingsScreen />;
      case 'subscribe':
        return <SubscriptionScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className={`min-h-screen w-full font-fredoka text-gray-800 ${language === 'ar' ? 'font-cairo' : ''} bg-sky-100`}>
      <div className="max-w-md mx-auto h-screen flex flex-col bg-white shadow-2xl">
        <main className="flex-grow overflow-y-auto">
          {renderContent()}
        </main>
        {languageSelected && <AdBanner />}
      </div>
    </div>
  );
};

export default App;
