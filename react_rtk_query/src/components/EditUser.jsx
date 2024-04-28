import { useEffect, useState } from "react";
import { useUpdateUserMutation, useGetUserQuery } from "../RTK/userAPI";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    id: id,
    name: "",
    email: "",
  });

  // the hook to fetch single user returns data
  const { data } = useGetUserQuery(id);
  useEffect(() => {
    if (data) {
      setUser({ ...user, name: data?.name, email: data?.email });
    }
  }, [data]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const [updateUser] = useUpdateUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user);
    // the records will be cached so, the newly entered data will not be shown
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center mt-5">
      <form
        className="border border-2 shadow-sm  p-5 w-50 "
        onSubmit={handleSubmit}
      >
        <h3 className="text-center mb-3">Edit User</h3>
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
            value={user?.name}
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
            value={user?.email}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};
export default EditUser;
