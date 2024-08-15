import { Link } from "react-router-dom";

function StartGame(){
    return (
        <>
        <div>
            StartGame Component
        </div>
        <Link to="/play"> Play Game </Link>
        </>
    );
}

export default StartGame;