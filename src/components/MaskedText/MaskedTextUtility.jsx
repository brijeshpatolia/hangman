export function getAllCharacters(word, usedLetters) {
    usedLetters = usedLetters.map(letter => letter.toUpperCase());
    const guessedLetters = new Set(usedLetters);
    const characters = word.toUpperCase().split('').map((char) => (guessedLetters.has(char) ? char : '_'));
    return characters.join(' ');
}  