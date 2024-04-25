import { useState } from "react";

export const TestInput = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
    <h1>Hola</h1>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter a name"
        onChange={(e) => {
          console.log(e.target.value); // Log the value of the input field
          setInputValue(e.target.value);
        }}
      />
    </>
  );
};


