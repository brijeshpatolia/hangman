import {  useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputform/TextInputFormContainer";

function StartGame(){
    const Navigate = useNavigate();
    function handleSubmit() {
        Navigate('/play');
    }
    return (
        <>
        <h1>
            StartGame Component
        </h1>
        <TextInputFormContainer onSubmit={handleSubmit} />
        </>
    );
}

export default StartGame;