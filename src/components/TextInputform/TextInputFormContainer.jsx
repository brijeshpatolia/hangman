import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer({ onSubmit }) {
  const [value, setValue] = useState("");
  const [showText, setShowText] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted", value);
    onSubmit?.(value);
    setValue(""); // clear the input field after form submission.
  }

  function handleChange(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  function toggleShowText() {
    setShowText(!showText);
  }

  return (
    <TextInputForm
      handleChange={handleChange}
      showText={showText}
      value={value}
      handleFormSubmit={handleFormSubmit}
      toggleShowText={toggleShowText}
    />
  );
}

export default TextInputFormContainer;
