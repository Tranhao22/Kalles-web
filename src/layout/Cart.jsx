import "../Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Cart({ isShowSideBarCart, setShowSideBarCart }) {

  return (
    <div className={`sidebar-cart  ${isShowSideBarCart ? "open" : "d-none"}`}>
      <div className="header d-flex">
        <div className="cart-title">SHOPPING CART</div>
        <div
          className="close"
          onClick={() => {
            setShowSideBarCart(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div className="data-percent">
        <div className="text">
            Free Shipping for all orders over <strong className="required">2.584.000₫</strong>
        </div>
        <div className="percent">
            tracking
        </div>
      </div>
      <div className="content">
        <div className="main">
            <div className="empty">
                <div className="img">
                    <FontAwesomeIcon icon={faCartPlus} />
                </div>
                <span className="text">Your cart is empty.</span>
                <div className="btn">
                    <button onClick={() => {
                        setShowSideBarCart(false);
                    }}>RETURN TO SHOP</button>
                </div>
            </div>
          <div className="cart d-none">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
