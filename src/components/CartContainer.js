import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { CLEAR_CART } from "../actions";
const CartContainer = ({ cart = [], total }) => {
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>Your Cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>Your Cart</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};

const mapStatetoProps = ({ cart, total }) => {
  return {
    cart: cart,
    total: total,
  };
};

export default connect(mapStatetoProps)(CartContainer);
