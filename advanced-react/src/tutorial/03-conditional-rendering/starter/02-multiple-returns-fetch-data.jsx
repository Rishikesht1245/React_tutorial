import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const user = await resp.json();
      console.log(user);
      setUser(user);
    } catch (error) {
      console.log("Error" + error);
      setIsError(true);
    }
    //after fetching set isLoading to false.
    setIsLoading(false);
  };
  //Fetching data
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error....</h2>;
  }
  const { name, avatar_url, company, bio } = user;
  return (
    <div>
      <img
        src={avatar_url}
        style={{ width: "150px", borderRadius: "1rem" }}
        alt=""
      />
      <h3>{name}</h3>
      <h4>Works at : {company}</h4>
      <h6>Teacher at : {bio}</h6>
    </div>
  );
};
export default MultipleReturnsFetchData;
