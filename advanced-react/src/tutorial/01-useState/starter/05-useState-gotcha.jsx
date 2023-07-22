import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log("Clicked the button");
      setValue((currentState) => currentState + 1);
    }, 3000);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button type="button" onClick={handleClick}>
        Increace Count
      </button>
    </div>
  );
};

export default UseStateGotcha;
