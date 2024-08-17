import {  useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputform/TextInputFormContainer";

function StartGame(){
    const navigate = useNavigate();
    function handleSubmit(value) {
        navigate('/play', { state: {wordSelected: value}});
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