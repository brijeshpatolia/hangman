import { Route, Routes } from "react-router-dom";
import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";

function App() {
  return (
    // <div>
    //   <h1 className="text-4xl font-bold text-center mt-8">Welcome to Hangman</h1>

    //   <TextInputFormContainer  onSubmit={(value)=>{console.log("form submitted with input " ,value   )}} />
    // </div>
    <Routes>
      <Route path="/play" element={<PlayGame />} />
      <Route path="/start" element={<StartGame />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
