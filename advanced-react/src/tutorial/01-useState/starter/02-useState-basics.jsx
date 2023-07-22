import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h4>You Clicked {count} time</h4>
      <button type="button" onClick={handleClick}>
        Increase Count
      </button>
    </div>
  );
};

export default UseStateBasics;
