import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInputFormContainer from '../../components/TextInputForm/TextInputFormContainer';

function StartGame() {
    const navigate = useNavigate();
    const [hint, setHint] = useState('');  // State to manage hint input

    const handleSubmit = (value) => {
        if (!value.trim()) {  // Check if the word input is empty or consists only of whitespace
            alert('Input cannot be empty. Please enter a word to start the game.');
            return;  // Prevent form submission
        }
        navigate('/play', { state: { wordSelected: value, hint } }); // Pass the hint as well
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Start Your Game
            </h1>
            <div className="w-full max-w-md">
                <TextInputFormContainer onSubmit={handleSubmit} />
                <div className="mt-4">
                    <input 
                        type="text" 
                        placeholder="Enter a hint (optional)" 
                        value={hint} 
                        onChange={(e) => setHint(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default StartGame;
