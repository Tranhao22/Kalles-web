// import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserAlt, faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const IconGroup = ({ setShowLoginSlideBar, setShowSideBarCart }) => {
    return (
        <div className="header-icons d-flex">
            <div className="search">
                <a href="/search">
                    <FontAwesomeIcon icon={faSearch} />
                </a>
            </div>
            <div className="profile" >
                <a onClick={() => setShowLoginSlideBar(true)}>
                    <FontAwesomeIcon icon={faUserAlt} />
                </a>
            </div>
            <div className="wishlist">
                <a href="/wishlist">
                    <FontAwesomeIcon icon={faHeart} />
                    <span data-count-wishlist="" className="t4s-pa t4s-count-wishlist">0</span>
                </a>
            </div>
            <div className="cart">
                <a onClick={() => setShowSideBarCart(true)}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span data-cart-count="" className="t4s-pa t4s-count-cart">0</span>
                </a>
            </div>
        </div>
    );
};

export default IconGroup;
