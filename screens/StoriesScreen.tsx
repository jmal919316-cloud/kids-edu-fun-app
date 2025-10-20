
import React from 'react';
import Header from '../components/Header';
import { useAppContext } from '../hooks/useAppContext';
import type { Story } from '../types';

/**
 * Displays a list of stories.
 * Premium stories are locked unless the user is subscribed.
 */
const StoriesScreen: React.FC = () => {
    const { content, isSubscribed, setCurrentPage, setStoryId } = useAppContext();
    
    const handleStoryClick = (story: Story) => {
        if (!story.isPremium || isSubscribed) {
            setStoryId(story.id);
        } else {
            alert('Subscribe to read this story!'); // Simple alert for demo purposes
        }
    };

    return (
        <div className="flex flex-col h-full">
            <Header title={content.stories.title} backPage="home" />
            <div className="p-4 space-y-4 overflow-y-auto">
                {content.storiesData.map(story => (
                    <button
                        key={story.id}
                        onClick={() => handleStoryClick(story)}
                        className="w-full flex items-center bg-white rounded-xl shadow-md p-4 active:scale-95 transition-transform"
                    >
                        <img src={story.imageUrl} alt={story.title} className="w-24 h-24 rounded-lg object-cover me-4"/>
                        <div className="flex-grow text-start">
                            <h3 className="text-2xl font-bold">{story.title}</h3>
                            {story.isPremium && (
                                <div className={`mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${isSubscribed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                    {isSubscribed ? '✓' : '🔒'}
                                    <span className="ms-1">{content.stories.premium}</span>
                                </div>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StoriesScreen;
