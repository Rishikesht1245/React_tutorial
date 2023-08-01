import "./CartButtons.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/Cart";

const CartBefore = () => {
  const dispatch = useDispatch();
  return (
    <div className="before-cart">
      {/* to call the method addToCart Present in redux we should use dispatch */}
      <button className="add-cart-button" onClick={() => dispatch(addToCart())}>
        Add to Cart
      </button>
    </div>
  );
};
export default CartBefore;
