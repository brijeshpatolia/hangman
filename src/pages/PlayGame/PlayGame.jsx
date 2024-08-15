import { Link } from "react-router-dom";

function PlayGame(){
    return (
        <>
        <div>
            PlayGame Component
        </div>

        <Link to="/start"> Start Game </Link>
        </>
    );
}

export default PlayGame;