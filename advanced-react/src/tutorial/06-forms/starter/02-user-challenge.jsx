import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    //return if name is empty
    if (!name) {
      alert("Please enter your name");
      return;
    }
    const id = Date.now();
    const newUser = { id: id, name: name };
    // Using spread operator for array concatenation
    setUsers([...users, newUser]);
    console.log("Form Submitted");
    setName("");
  };

  const handleClick = (id) => {
    console.log(id);
    const newUsers = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(newUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h4>Users</h4>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => handleClick(user.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
