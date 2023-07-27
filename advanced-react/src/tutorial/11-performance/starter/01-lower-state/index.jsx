import { useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import Counter from "./counter";
const LowerState = () => {
  console.log("counter");
  const [people, setPeople] = useState(data);

  return (
    <section>
      <Counter />
      <List people={people} />
    </section>
  );
};
export default LowerState;
