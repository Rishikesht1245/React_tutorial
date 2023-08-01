import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Redux Tutorial</h1>
        <AiOutlineShoppingCart className="cart-icon" />
      </div>
    </header>
  );
};
export default Header;
