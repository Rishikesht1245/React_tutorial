import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const GlobalContext = createContext();

const AppContext = () => {
  const [name, setName] = useState("peter");
  return (
    <GlobalContext.Provider value={{ name, setName }}></GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default AppContext;
