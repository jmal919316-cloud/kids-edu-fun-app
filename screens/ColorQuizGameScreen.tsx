import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useAppContext } from '../hooks/useAppContext';
import type { ColorQuizQuestion } from '../types';

// Helper function to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};

/**
 * A color quiz game.
 * Players choose the correct color based on a text prompt.
 */
const ColorQuizGameScreen: React.FC = () => {
  const { content, addPoints, language } = useAppContext();
  const [questions, setQuestions] = useState<ColorQuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Initialize and shuffle questions on component mount
  useEffect(() => {
    resetGame();
  }, [language]); // Reset if language changes

  const resetGame = () => {
    setQuestions(shuffleArray([...content.colorQuizQuestions]));
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
  };
  
  const handleAnswerClick = (selectedColor: string) => {
    if (isFinished) return;

    if (selectedColor === questions[currentQuestionIndex].correctColorHex) {
        setScore(score + 1);
        addPoints(5);
    }

    if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
        setIsFinished(true);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col h-full bg-purple-50">
      <Header title={content.colorQuiz.title} backPage="games" />
      
      {isFinished ? (
        <div className="flex flex-col items-center justify-center flex-grow p-4 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-brand-purple mb-2">{content.colorQuiz.congrats}</h2>
            <p className="text-xl text-gray-600 mb-4">{content.colorQuiz.score}: {score} / {questions.length}</p>
            <button onClick={resetGame} className="bg-brand-blue text-white px-8 py-3 rounded-full text-xl font-bold">
                {content.colorQuiz.playAgain}
            </button>
        </div>
      ) : currentQuestion ? (
        <div className="flex flex-col items-center justify-center flex-grow p-8 text-center">
            <h2 className="text-4xl font-bold mb-8">{content.colorQuiz.question(currentQuestion.colorName)}</h2>
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {shuffleArray(currentQuestion.options).map((colorHex, index) => (
                    <button 
                        key={index}
                        onClick={() => handleAnswerClick(colorHex)}
                        className="w-full h-32 rounded-2xl shadow-lg active:scale-95 transition-transform"
                        style={{ backgroundColor: colorHex }}
                        aria-label={`Color option ${index + 1}`}
                    >
                    </button>
                ))}
            </div>
             <p className="text-2xl font-bold mt-8">{content.colorQuiz.score}: {score}</p>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-grow">Loading...</div>
      )}
    </div>
  );
};

export default ColorQuizGameScreen;
