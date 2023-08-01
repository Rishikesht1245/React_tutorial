import products from "../../api/products.json";
import CartBefore from "./CartButtons/CartBefore";
import CartAfter from "./CartButtons/CartAfter";
import "./ProductList.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductList = () => {
  //useSelector is used to access the store
  const { cartCount, cartList } = useSelector((state) => state.cart);

  return (
    <section className="container">
      {products.map((product, index) => {
        return (
          <div className="product-container" key={index}>
            <img src={product?.image} alt="" />
            <h3>{product?.title}</h3>
            {cartCount > 0 ? <CartAfter /> : <CartBefore />}
          </div>
        );
      })}
    </section>
  );
};
export default ProductList;
