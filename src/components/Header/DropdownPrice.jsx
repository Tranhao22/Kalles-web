import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const listPrice = [
    { id: 0, key: "VND", name: "Việt Nam", icon: "đ", path: "https://cdn.shopify.com/static/images/flags/vn.svg" },
    { id: 1, key: "CAD", name: "Canada", icon: "$", path: "https://cdn.shopify.com/static/images/flags/ca.svg" },
    { id: 2, key: "GBP", name: "United Kingdom", icon: "$", path: "https://cdn.shopify.com/static/images/flags/gb.svg" },
    { id: 3, key: "USD", name: "United States", icon: "$", path: "https://cdn.shopify.com/static/images/flags/us.svg" },
];

const DropdownPrice = ({ isOpen, toggleDropdown, setPrice, price }) => {
    return (
        <div className="price mr-inline-start">
            <div className="parent-price" onClick={toggleDropdown}>
                <img src="../assets/img/vietnam.png" alt="" />
                {price}
                <FontAwesomeIcon icon={faChevronDown} width={'8px'} />
            </div>
            <div className={`dropdown d-none ${isOpen && 'open'}`}>
                {listPrice.map((item, index) => (
                    <div className={`item ${item.key === price ? 'active' : ''}`} key={index} >
                        <a onClick={() => setPrice(item.key)}>
                            <img src={item.path} alt="" />
                            {item.name} - {item.key} {item.icon}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownPrice;
