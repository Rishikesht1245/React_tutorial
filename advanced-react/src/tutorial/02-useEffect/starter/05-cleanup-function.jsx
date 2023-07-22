import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle Component
      </button>
      {/* Conditional rendering */}
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      //some logic
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
  return <h1>Hello There....</h1>;
};

export default CleanupFunction;
