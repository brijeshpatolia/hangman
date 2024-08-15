import Button from "./components/Button/Button";

function App()
{
  return (
      <div>
       <h1>hello world!</h1> 
       <Button  styleType={"primary"} text={"primary"} onClickHandler={() => console.log('primary clicked')}/>
       <Button  styleType={"secondary"} text={"secondary"} onClickHandler={() => console.log('secondary clicked')}/>
       <Button  styleType={"warning"} text={"warning"} onClickHandler={() => console.log('warning clicked')}/>
       <Button  styleType={"error"} text={"error"} onClickHandler={() => console.log('error clicked')}/>
      
      </div>
  )
}

export default App;