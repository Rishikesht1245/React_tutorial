import Item from "./Person";
import { memo } from "react";

const List = ({ people, removePerson }) => {
  console.log("List renders");
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removePerson={removePerson} />;
      })}
    </div>
  );
};
export default memo(List);
