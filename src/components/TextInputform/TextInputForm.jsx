import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ handleChange, showText , value, handleFormSubmit, toggleShowText }) {
    console.log(showText)
  return (
    
    <form className="flex" onSubmit={handleFormSubmit}>
      <div className="mr-2 flex">
        <TextInput
          label="Enter a word or phrase"
          text={showText ? "text" : "password"}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="flex">
        <Button text="Ok" buttonType="submit"  />
      </div>
      <div className="flex">
        <Button
          text={showText ? "Hide" : "Show"}
          buttonType="button"
          onClickHandler={toggleShowText}
          styleType="warning"
        />
      </div>
    </form>
  );
}

export default TextInputForm;
