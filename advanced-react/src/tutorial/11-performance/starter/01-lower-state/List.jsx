import Person from "./Person";
import { memo } from "react";

const List = ({ people }) => {
  console.log("List render");
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default List;
