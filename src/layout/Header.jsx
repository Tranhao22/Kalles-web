import "../Header.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope,
    faChevronDown,
    faLocationDot,
    faSearch,
    faUserAlt,
    faCartShopping
} from "@fortawesome/free-solid-svg-icons";

import {
    faHeart
} from "@fortawesome/free-regular-svg-icons";
import Login from "./Login";

const listLang = [
    {
        id: 0,
        key : "en",
        name: "English",
    },
    {
        id: 1,
        key : "vi",
        name: "Tiếng Việt",
    }
];

const listPrice = [
    {
        id: 0,
        key : "VND",
        name: "Việt Nam",
        icon: "đ",
        path: "https://cdn.shopify.com/static/images/flags/vn.svg"
    },
    {
        id: 1,
        key : "CAD",
        name: "Canada",
        icon: "$",
        path: "https://cdn.shopify.com/static/images/flags/ca.svg"
    },
    {
        id: 2,
        key : "GBP",
        name: "United Kingdom",
        icon: "$",
        path: "https://cdn.shopify.com/static/images/flags/gb.svg"
    },
    {
        id: 3,
        key : "USD",
        name: "United States",
        icon: "$",
        path: "https://cdn.shopify.com/static/images/flags/us.svg",
    },
];
const Header = () => {
    const [isOpenLang, setOpenLang] = useState(false);
    const [lang, setLang] = useState('en');
    
    const [isOpenPrice, setOpenPrice] = useState(false);
    const [price, setPrice] = useState('VND');
    const [isShowLoginSlideBar, setShowLoginSlideBar] = useState(false);

    const toggleDropdownLang = () =>{
        setOpenPrice(false);
        setOpenLang(!isOpenLang);
    }

    const toggleDropdownPrice = () =>{
        setOpenLang(false);
        setOpenPrice(!isOpenPrice);
    }



    return (
        <header className="header d-flex">
            <div className="header-top d-flex">
                <div className="contact-info">
                    <a href="tel:+0123456789">
                        <FontAwesomeIcon icon={faPhone} />
                        +01 23456789
                    </a>
                    <a href="mailto:admin@domain.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                        admin@domain.com
                    </a>
                </div>
                <div className="sale-info">
                    <a href="/shop">
                        Summer sale discount off <strong className="rate-sale">50%!</strong>{" "}
                        Shop Now
                    </a>
                </div>
                <div className="content-language-price d-flex">
                    <div className="location mr-inline-start">
                        <FontAwesomeIcon icon={faLocationDot} width={'8px'} />
                        Location
                    </div>
                    <div className="languages mr-inline-start">
                        <div className="parent current-lang" onClick={toggleDropdownLang}>
                            {listLang.find(item => item.key === lang)?.name}
                            <FontAwesomeIcon icon={faChevronDown}width={'8px'} />
                        </div>
                        <div className={`dropdown d-none ${isOpenLang && 'open'}`}>
                            {listLang.map((item, index) => (
                                <div className={`item ${item.key === lang ? 'active' : ''}`} key={index} >
                                    <a onClick={() => setLang(item.key)}>{item.name}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="price mr-inline-start">
                        <div className="parent-price"  onClick={toggleDropdownPrice}>
                            <img src="../assets/img/vietnam.png" alt=""/>
                            {price}
                            <FontAwesomeIcon icon={faChevronDown}width={'8px'}/>
                        </div>
                        <div className={`dropdown d-none ${isOpenPrice && 'open'}`}>
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
                </div>
            </div>
            <div className="header-bottom d-flex">
                <div className="logo">
                    <a href="/">
                        <div className="img">
                            <img
                                src="https://demo-kalles-4-1.myshopify.com/cdn/shop/files/kalles_babcb241-47cc-4352-a0ae-1458bbff9dcc.png"
                                alt=""
                            />
                        </div>
                    </a>
                </div>
                <nav className="nav">
                    <ul className="nav-ul d-flex">
                        <li className="mega-menu">
                            <a href="/demo">Demo</a>
                        </li>
                        <li className="mega-menu has-submenu">
                            <a href="/shop">
                                Shop
                                <span className="span_menu_new menu_title bg_new">New</span>
                            </a>
                            <div className="submenu layout-menu d-none">
                                <div className="content d-flex">
                                    <div className="layout-content d-flex w-50">
                                        <div className="bk-submenu">
                                            <div className="heading">Portfolio</div>
                                            <ul className="sub-column">
                                                <li className="t4s-menu-item">
                                                    <a href="#">Portfolio 2 Columns</a>
                                                </li>
                                                <li className="t4s-menu-item">
                                                    <a href="#">Portfolio 2 Columns</a>
                                                </li>
                                                <li className="t4s-menu-item">
                                                    <a href="#">Portfolio 2 Columns</a>
                                                </li>
                                                <li className="t4s-menu-item">
                                                    <a href="#">Portfolio 2 Columns</a>
                                                </li>
                                                <li className="t4s-menu-item">
                                                    <a href="#">Portfolio 2 Columns</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bk-submenu">
                                            <div className="heading">Portfolio</div>
                                            <ul className="sub-column">
                                                <li className="t4s-menu-item">
                                                    <a href="#">Portfolio 2 Columns</a>
                                                </li>
                                                <li className="t4s-menu-item">
                                                    <a href="#">Portfolio 2 Columns
                                                        <span className="span_menu_hot bg_hot">Hot</span>
                                                    </a>
                                                </li>
                                                <li className="t4s-menu-item">
                                                    <a href="#">Portfolio 2 Columns</a>
                                                </li>
                                                <li className="t4s-menu-item">
                                                    <a href="#">Portfolio 2 Columns</a>
                                                </li>
                                                <li className="t4s-menu-item">
                                                    <a href="#">Portfolio 2 Columns</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bk-submenu">
                                            <div className="heading">Portfolio</div>
                                            <ul className="sub-column">
                                                <li className="t4s-menu-item">
                                                    <a href="#">Portfolio 2 Columns</a>
                                                </li>
                                                <li className="t4s-menu-item">
                                                    <a href="#">Portfolio 2 Columns</a>
                                                </li>
                                                <li className="t4s-menu-item">
                                                    <a href="#">Portfolio 2 Columns</a>
                                                </li>
                                                <li className="t4s-menu-item">
                                                    <a href="#">Portfolio 2 Columns</a>
                                                </li>
                                                <li className="t4s-menu-item">
                                                    <a href="#">Portfolio 2 Columns</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="layout-category d-flex w-50">
                                        <div className="bk-submenu">
                                            <img src="https://cdn.shopify.com/s/files/1/0616/9480/4174/files/mem-01.jpg" alt="" />
                                        </div>
                                        <div className="bk-submenu">
                                            <img src="https://cdn.shopify.com/s/files/1/0616/9480/4174/files/MEN.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="mega-menu has-submenu">
                            <a href="/product">Product</a>
                            <div className="submenu d-none">
                                <div className="content d-flex">
                                    <div className="bk-submenu">
                                        <div className="heading">Portfolio</div>
                                        <ul className="sub-column">
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bk-submenu">
                                        <div className="heading">Portfolio</div>
                                        <ul className="sub-column">
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns
                                                    <span className="span_menu_hot bg_hot">Hot</span>
                                                </a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bk-submenu">
                                        <div className="heading">Portfolio</div>
                                        <ul className="sub-column">
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bk-submenu">
                                        <div className="heading">Portfolio</div>
                                        <ul className="sub-column">
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns
                                                    <span className="span_menu_new bg_new">New</span>
                                                </a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                            <li className="t4s-menu-item">
                                                <a href="#">Portfolio 2 Columns</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="mega-menu">
                            <a href="/sale">
                                Sale
                                <span className="span_menu_sale menu_title bg_sale">Sale</span>
                            </a>
                        </li>
                        <li className="mega-menu">
                            <a href="/pages">Pages</a>
                        </li>
                        <li className="mega-menu has-submenu">
                            <a href="/lookbook">Lookbook</a>
                            <div className="submenu lazy-menu d-none">
                                <div className="content">
                                    <div className="ts4-menu-item">
                                        <a href="#">Lookbook Slider</a>
                                    </div>
                                    <div className="ts4-menu-item">
                                        <a href="#">Lookbook Slider</a>
                                    </div>
                                    <div className="ts4-menu-item">
                                        <a href="#">Lookbook Slider</a>
                                    </div>
                                    <div className="ts4-menu-item">
                                        <a href="#">Lookbook Slider</a>
                                    </div>
                                    <div className="ts4-menu-item">
                                        <a href="#">Lookbook Slider</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="mega-menu">
                            <a href="/blog">Blog</a>
                        </li>
                        <li className="mega-menu">
                            <a href="/buy-theme">Buy Theme</a>
                        </li>
                    </ul>
                </nav>
                <div className="header-icons d-flex">
                    <div className="search">
                        <a href="/search">
                            <FontAwesomeIcon icon={faSearch}/>
                        </a>
                    </div>
                    <div className="profile" >
                        <a onClick={()=>{
                            setShowLoginSlideBar(true)}} >
                            <FontAwesomeIcon icon={faUserAlt}/>
                        </a>
                    </div>
                    <div className="wishlist">
                        <a href="/wishlist">
                            <FontAwesomeIcon icon={faHeart}/>
                            <span data-count-wishlist="" className="t4s-pa t4s-count-wishlist">0</span>
                        </a>
                    </div>
                    <div className="cart">
                        <a href="/cart">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span data-cart-count="" className="t4s-pa t4s-count-cart">0</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={`t4s-close ${!isShowLoginSlideBar ? "d-none" :""}`} onClick={()=>{setShowLoginSlideBar(false)}}></div>
            <Login isShowLoginSlideBar={isShowLoginSlideBar} setShowLoginSlideBar={setShowLoginSlideBar}/>
        </header>
        
    );
};

export default Header;
