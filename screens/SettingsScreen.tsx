import React from 'react';
import Header from '../components/Header';
import { useAppContext } from '../hooks/useAppContext';

/**
 * The settings screen.
 * Allows users to change the language and manage their (simulated) subscription.
 */
const SettingsScreen: React.FC = () => {
    const { content, language, setLanguage, isSubscribed, setCurrentPage } = useAppContext();

    return (
        <div className="flex flex-col h-full">
            <Header title={content.settings.title} backPage="home" />
            <div className="p-6 space-y-8">
                {/* Language Setting */}
                <div>
                    <h2 className="text-xl font-bold mb-2 text-gray-700">{content.settings.language}</h2>
                    <div className="flex space-x-2 rtl:space-x-reverse">
                        <button 
                            onClick={() => setLanguage('en')}
                            className={`flex-1 p-3 rounded-lg font-bold text-lg ${language === 'en' ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}
                        >
                            English
                        </button>
                        <button 
                            onClick={() => setLanguage('ar')}
                            className={`flex-1 p-3 rounded-lg font-bold text-lg ${language === 'ar' ? 'bg-brand-blue text-white' : 'bg-gray-200'}`}
                        >
                            العربية
                        </button>
                    </div>
                </div>

                {/* Subscription Setting */}
                <div>
                    <h2 className="text-xl font-bold mb-2 text-gray-700">{content.settings.subscription}</h2>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        {isSubscribed ? (
                            <div className="text-center">
                                <p className="text-2xl text-green-600 mb-2">🎉</p>
                                <p className="font-bold text-green-700">{content.settings.subscribed}</p>
                                <p className="text-gray-500">{content.settings.premiumUnlocked}</p>
                            </div>
                        ) : (
                            <div className="text-center">
                                <p className="mb-4 text-gray-600">{content.settings.subscribe}</p>
                                <button
                                    onClick={() => setCurrentPage('subscribe')}
                                    className="w-full bg-brand-purple text-white font-bold py-3 px-4 rounded-lg active:scale-95 transition-transform"
                                >
                                    {content.settings.goToSubscribe}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsScreen;
