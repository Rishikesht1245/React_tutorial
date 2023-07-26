import NavLinks from "./NavLinks";

import { useState, createContext } from "react";
export const NavbarContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  //   function for making the user logout
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>Context API</h5>
        {/* Prop-drilling */}
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;
