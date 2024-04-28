import { useState } from "react";
import { useAddUserMutation } from "../RTK/userAPI";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // the mutation hook will return the function to use for adding
  const navigate = useNavigate();

  const [addUser] = useAddUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser(user);
    // the records will be cached so, the newly entered data will not be shown
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center mt-5">
      <form
        className="border border-2 shadow-sm  p-5 w-50 "
        onSubmit={handleSubmit}
      >
        <h3 className="text-center mb-3">Add User</h3>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name :
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="name"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email :
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            name="email"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddUser;
