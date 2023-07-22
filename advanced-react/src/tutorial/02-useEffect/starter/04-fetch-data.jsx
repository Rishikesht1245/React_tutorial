import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  // Provide empty array as initial value
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //Fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        //converting json data to object
        const users = await response.json();
        //set users
        setUsers(users);
      } catch (error) {
        console.log("error in catching" + error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Git Hub Users</h2>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img
                src={avatar_url}
                style={{ width: "50px", height: "auto" }}
                alt=""
              />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Login</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FetchData;
