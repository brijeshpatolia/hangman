import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ handleChange, showText, value, handleFormSubmit, toggleShowText }) {
  console.log(showText);
  return (
    <form
      className="flex flex-col items-center space-y-4 p-4 bg-white shadow-lg rounded-lg w-full max-w-md mx-auto"
      onSubmit={handleFormSubmit}
    >
      <div className="w-full">
        <TextInput
          label="Enter a word or phrase"
          text={showText ? "text" : "password"}
          value={value}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <div className="flex space-x-4 w-full justify-center">
        <Button text="Ok" buttonType="submit" className="w-full md:w-auto" />
        <Button
          text={showText ? "Hide" : "Show"}
          buttonType="button"
          onClickHandler={toggleShowText}
          styleType={showText ? "error" : "warning"}
          className="w-full md:w-auto"
        />
      </div>
    </form>
  );
}

export default TextInputForm;
