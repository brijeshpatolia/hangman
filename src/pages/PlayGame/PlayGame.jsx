import { Link } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";

function PlayGame(){
    return (
        <>
        <h1>
            PlayGame Component
        </h1>
        <MaskedText text={"humble"} usedLetters={['b','l']}/>
        <hr />
        <Link to="/start"> Start Game </Link>
        </>
    );
}

export default PlayGame;