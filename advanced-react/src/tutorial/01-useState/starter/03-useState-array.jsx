import { data } from "../../../data";
import React from "react";
const UseStateArray = () => {
  //data will be assigned to people as initial state
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    console.log(id);
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };

  const clearAll = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        onClick={clearAll}
        style={{ padding: "1rem", background: "red", color: "white" }}
      >
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
