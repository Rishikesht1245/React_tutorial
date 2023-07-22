import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      <h2>{text || "Default value"}</h2>
      {!text && (
        <div>
          <h2>Whatever</h2>
          <h2>{name}</h2>
          <button className="btn">{isEditing ? "Hello" : " no Hello"}</button>
        </div>
      )}
    </div>
  );
};

export default ShortCircuitExamples;
