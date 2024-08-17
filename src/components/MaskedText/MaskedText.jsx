import { getAllCharacters } from "./MaskedTextUtility";

function MaskedText ({text,usedLetters}){

    return(
        <>
            {getAllCharacters(text, usedLetters).split(' ').map((char, index) => (
                <span key={index} className="inline-block mx-1">{char}</span>
            ))}
        </>
    );


}



export default MaskedText;