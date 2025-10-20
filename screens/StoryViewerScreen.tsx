
import React from 'react';
import Header from '../components/Header';
import { useAppContext } from '../hooks/useAppContext';

/**
 * Displays the content of a single story.
 */
const StoryViewerScreen: React.FC = () => {
    const { content, storyId, setStoryId, setCurrentPage } = useAppContext();
    
    const story = content.storiesData.find(s => s.id === storyId);

    const handleBack = () => {
        setStoryId(null);
        setCurrentPage('stories');
    }

    if (!story) {
        return (
            <div className="flex flex-col h-full">
                <div className="p-4">
                    <p>Story not found.</p>
                    <button onClick={handleBack} className="text-blue-500">Go Back</button>
                </div>
            </div>
        );
    }
    
    return (
        <div className="flex flex-col h-full">
            <Header title={story.title} backPage="stories" />
            <div className="flex-grow p-4 overflow-y-auto">
                <img src={story.imageUrl} alt={story.title} className="w-full rounded-xl shadow-lg mb-6"/>
                <div className="space-y-4 text-2xl leading-relaxed text-gray-700">
                    {story.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoryViewerScreen;

