import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return <h2>Multiple Return Basics</h2>;
  }
};
export default MultipleReturnsBasics;
