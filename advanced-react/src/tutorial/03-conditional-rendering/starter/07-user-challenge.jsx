import { isValidElement, useState } from "react";
const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // normally connect to db or api
    setUser({ name: "Rishi" });
  };
  const logout = () => {
    // normally connect to db or api
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h3>Please Login</h3>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
