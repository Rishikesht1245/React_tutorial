import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 34,
    hobby: "Reading books",
  });

  const displayPerson = () => {
    setPerson({ ...person, name: "John" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys : {person.hobby}</h3>
      <button type="button" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
