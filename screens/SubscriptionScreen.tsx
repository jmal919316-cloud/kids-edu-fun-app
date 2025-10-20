import React from 'react';
import Header from '../components/Header';
import { useAppContext } from '../hooks/useAppContext';

/**
 * A screen that simulates the subscription purchase flow.
 */
const SubscriptionScreen: React.FC = () => {
    const { content, setIsSubscribed, setCurrentPage } = useAppContext();

    const handleSubscribe = () => {
        setIsSubscribed(true);
        setCurrentPage('settings'); // Go back to settings to see the "Subscribed" status
    };

    return (
        <div className="flex flex-col h-full bg-gray-50">
            <Header title={content.subscribe.title} backPage="settings" />
            <div className="flex-grow p-6 flex flex-col items-center text-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
                    <div className="text-5xl mb-4">✨</div>
                    <h2 className="text-3xl font-bold text-brand-purple">{content.subscribe.plan}</h2>
                    
                    <div className="my-6">
                        <p className="text-5xl font-bold">{content.subscribe.price}</p>
                        <p className="text-gray-500">{content.subscribe.priceDetails}</p>
                    </div>

                    <ul className="space-y-2 text-left text-gray-600 mb-8">
                        {content.subscribe.features.map((feature, index) => (
                             <li key={index} className="flex items-center">
                                <span className="text-green-500 me-2">✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={handleSubscribe}
                        className="w-full bg-brand-green text-white font-bold py-4 px-4 rounded-lg text-xl active:scale-95 transition-transform"
                    >
                        {content.subscribe.confirm}
                    </button>
                    <p className="text-xs text-gray-400 mt-4">{content.subscribe.simulationNotice}</p>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionScreen;
