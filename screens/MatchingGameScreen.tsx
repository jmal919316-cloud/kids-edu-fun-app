
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useAppContext } from '../hooks/useAppContext';
import type { GameCard } from '../types';

// Helper function to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};

/**
 * A matching card game.
 * Players flip two cards to find a match.
 */
const MatchingGameScreen: React.FC = () => {
  const { content, addPoints } = useAppContext();
  const [cards, setCards] = useState<GameCard[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [isChecking, setIsChecking] = useState(false);

  // Initialize and shuffle cards on component mount
  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setCards(shuffleArray([...content.matchingGameCards]));
    setFlippedIndices([]);
    setMatchedIds([]);
    setMoves(0);
    setIsChecking(false);
  };

  useEffect(() => {
    if (flippedIndices.length === 2) {
      setIsChecking(true);
      setMoves(moves + 1);
      const [firstIndex, secondIndex] = flippedIndices;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.matchId === secondCard.matchId) {
        setMatchedIds([...matchedIds, firstCard.matchId]);
        addPoints(10);
        setFlippedIndices([]);
        setIsChecking(false);
      } else {
        setTimeout(() => {
          setFlippedIndices([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  }, [flippedIndices, cards, matchedIds, addPoints, moves]);

  const handleCardClick = (index: number) => {
    if (isChecking || flippedIndices.includes(index) || matchedIds.includes(cards[index].matchId)) {
      return;
    }
    setFlippedIndices([...flippedIndices, index]);
  };
  
  const isGameWon = matchedIds.length === content.matchingGameCards.length / 2;

  return (
    <div className="flex flex-col h-full bg-green-50">
      <Header title={content.matchingGame.title} backPage="games" />
      <div className="p-4 text-center text-xl font-bold text-gray-600">
        {content.matchingGame.moves}: {moves}
      </div>
      
      {isGameWon ? (
        <div className="flex flex-col items-center justify-center flex-grow p-4">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-brand-green mb-4">{content.matchingGame.congrats}</h2>
            <button onClick={resetGame} className="bg-brand-blue text-white px-8 py-3 rounded-full text-xl font-bold">
                {content.matchingGame.playAgain}
            </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3 p-4 flex-grow">
          {cards.map((card, index) => {
            const isFlipped = flippedIndices.includes(index) || matchedIds.includes(card.matchId);
            return (
              <div key={index} className="perspective-1000" onClick={() => handleCardClick(index)}>
                <div
                  className={`relative w-full h-full rounded-lg shadow-md transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                  style={{ aspectRatio: '1/1' }}
                >
                  {/* Card Back */}
                  <div className="absolute w-full h-full backface-hidden bg-brand-yellow flex items-center justify-center rounded-lg text-4xl">
                    ?
                  </div>
                  {/* Card Front */}
                  <div className="absolute w-full h-full backface-hidden bg-white rotate-y-180 rounded-lg overflow-hidden flex flex-col items-center justify-center p-1">
                    <img src={card.imageUrl} alt={card.content} className="max-w-full max-h-16 object-contain"/>
                    <span className="text-sm font-bold mt-1">{card.content}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MatchingGameScreen;

