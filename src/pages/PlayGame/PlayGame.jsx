import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import HangMan from "../../components/HangMan/HangMan";
import { useEffect, useState } from "react";
import Confetti from 'react-confetti';  // Import Confetti component

function PlayGame() {
    const [usedLetters, setUsedLetters] = useState([]);
    const [step, setStep] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);  // State to control confetti display
    const location = useLocation();
    const wordSelected = location.state?.wordSelected;
    const hint = location.state?.hint;

    useEffect(() => {
        if (step === 8) {
            alert('You lose!');
            setGameOver(true);
        }
    }, [step]);

    useEffect(() => {
        const uniqueLettersInWord = new Set(wordSelected.toUpperCase());
        const guessedAllLetters = [...uniqueLettersInWord].every(letter => usedLetters.includes(letter));

        if (guessedAllLetters && step < 8) {
            setTimeout(() => {
                alert('You win!');
                setShowConfetti(true);  // Trigger confetti
                setGameOver(true);
            }, 500); // Add a delay of 500ms before showing the win alert
        }
    }, [usedLetters, wordSelected, step]);

    const handleLetterClick = (letter) => {
        if (gameOver || usedLetters.includes(letter)) return;

        if (wordSelected.toUpperCase().includes(letter)) {
            console.log('Correct');
        } else {
            console.log('Incorrect');
            setStep((prevStep) => prevStep + 1);
        }

        setUsedLetters((prevUsedLetters) => [...prevUsedLetters, letter]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center p-4">
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}  {/* Confetti component */}
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 mb-8 drop-shadow-lg shadow-black transform-gpu transition-transform duration-300 hover:scale-110 px-6 py-4">
                Play the Hangman
            </h1>
            <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
                {hint && (
                    <div className="text-lg font-medium text-gray-700 mb-4">
                        Hint: {hint}
                    </div>
                )}
                <div className="flex justify-center items-center mb-8 text-3xl">
                    <MaskedText 
                        text={wordSelected} 
                        usedLetters={usedLetters} 
                        className="text-3xl text-yellow-300 tracking-wider"
                    />
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="basis-2/4">
                        <LetterButtons 
                            text={wordSelected} 
                            usedLetters={usedLetters} 
                            onLetterClick={handleLetterClick} 
                            className="grid grid-cols-8 gap-2"
                        />
                    </div>
                    
                    <div className="basis-2/4 flex justify-center items-center mt-8 md:mt-0">
                        <HangMan step={step} className="w-1/2"/>
                    </div>
                </div>
            </div>
            
            <Link 
                to='/start' 
                className="mt-8 text-lg text-white underline hover:text-yellow-300 transition-colors duration-300"
            >
                Start a New Game
            </Link>
        </div>
    );
}

export default PlayGame;
