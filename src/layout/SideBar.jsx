import "../SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import { useState } from "react";
function SideBar({ isShowSideBar, setShowSideBar }) {
    const [optionsSidebar, setOptionsSideBar] = useState(1);

  return (
    <div className={`sidebar ${isShowSideBar ? "open" : "d-none"}`}>
      <div className="header">
        <div className="category-menu d-flex">
            <div className={`menu menu-item ${ (optionsSidebar == 1) ? "active" : ""}`} onClick={()=>{
                setOptionsSideBar(1);
            }}>
                MENU
            </div>
            <div className={`category menu-item ${ (optionsSidebar == 2) ? "active" : ""}`} onClick={()=>{
                setOptionsSideBar(2);
            }}>
                CATEGORY
            </div>
        </div>
        <div
          className="close"
          onClick={() => {
            setShowSideBar(false);
            setOptionsSideBar(1);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </div>
      <div className="content">
        <div className="main">
            <div className={`menu-sub ${ (optionsSidebar == 1) ? "open" : "d-none"}`}>
                <ul className="ul-menu d-flex">
                    <li className="li-menu">
                        <a href="/" className="a-submenu">
                            <span>abc1</span>
                            <FontAwesomeIcon icon={faPlus} />
                        </a>
                        <ul className="t4s-sub-menu d-none">
                            <li className="t4s-menu-item level-1">
                                <a href="#">Home Furniture 1</a>
                            </li>
                            <li className="t4s-menu-item level-1">
                                <a href="#">Home Furniture 1</a>
                            </li>
                            <li className="t4s-menu-item level-1">
                                <a href="#">Home Furniture 1</a>
                            </li>
                            <li className="t4s-menu-item level-1">
                                <a href="#">Home Furniture 1</a>
                            </li>
                            <li className="t4s-menu-item level-1">
                                <a href="#">Home Furniture 1</a>
                            </li>
                            <li className="t4s-menu-item level-1">
                                <a href="#">Home Furniture 1</a>
                            </li>
                        </ul>
                    </li>
                    <li className="li-menu">
                        <a href="/" className="a-submenu">
                            <span>abc2</span>
                            <FontAwesomeIcon icon={faPlus} />
                        </a>
                        <ul className="t4s-sub-menu">
                            <li className="t4s-menu-item level-1">
                                <a href="#" className="a-sub-submenu">
                                    <span>Home Furniture 2</span>
                                    <FontAwesomeIcon icon={faPlus} />
                                </a>
                                <ul className="t4s-sub-sub-menu menu-item-has-children">
                                    <li className="t4s-menu-item level-2">
                                        <a href="#" className="a-sub-sub-submenu">Home Furniture 22</a>
                                    </li>
                                    <li className="t4s-menu-item level-2">
                                        <a href="#" className="a-sub-sub-submenu">Home Furniture 22</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="t4s-menu-item level-1">
                                <a href="#" className="a-sub-submenu">
                                    <span>Home Furniture 2</span>
                                    <FontAwesomeIcon icon={faPlus} />
                                </a>
                                <ul className="t4s-sub-sub-menu menu-item-has-children">
                                    <li className="t4s-menu-item level-2">
                                        <a href="#" className="a-sub-sub-submenu">Home Furniture 22</a>
                                    </li>
                                    <li className="t4s-menu-item level-2">
                                        <a href="#" className="a-sub-sub-submenu">Home Furniture 22</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="li-menu">
                        <a href="/" className="a-submenu">
                            <span>abc</span>
                            <FontAwesomeIcon icon={faPlus} />
                        </a>
                    </li>
                </ul>
            </div>

            <div className={`category-menu ${ (optionsSidebar == 2) ? "open" : "d-none"}`}>
                <ul className="category-sub">
                    <li className="category-item">
                        <a href="/" className="a-category d-flex">
                            <img src="https://demo-kalles-4-1.myshopify.com/cdn/shop/files/cat-accessories_09479ede-773b-4e63-ae52-dc9100148266.jpg" alt="" />
                            <span>abc</span>
                        </a>
                    </li>
                    <li className="category-item">
                        <a href="/" className="a-category d-flex">
                            <img src="https://demo-kalles-4-1.myshopify.com/cdn/shop/files/cat-accessories_09479ede-773b-4e63-ae52-dc9100148266.jpg" alt="" />
                            <span>abc</span>
                        </a>
                    </li>
                    <li className="category-item">
                        <a href="/" className="a-category d-flex">
                            <img src="https://demo-kalles-4-1.myshopify.com/cdn/shop/files/cat-accessories_09479ede-773b-4e63-ae52-dc9100148266.jpg" alt="" />
                            <span>abc</span>
                        </a>
                    </li>
                    <li className="category-item">
                        <a href="/" className="a-category d-flex">
                            <img src="https://demo-kalles-4-1.myshopify.com/cdn/shop/files/cat-accessories_09479ede-773b-4e63-ae52-dc9100148266.jpg" alt="" />
                            <span>abc</span>
                        </a>
                    </li>
                    <li className="category-item">
                        <a href="/" className="a-category d-flex">
                            <img src="https://demo-kalles-4-1.myshopify.com/cdn/shop/files/cat-accessories_09479ede-773b-4e63-ae52-dc9100148266.jpg" alt="" />
                            <span>abc</span>
                        </a>
                    </li>
                    <li className="category-item">
                        <a href="/" className="a-category d-flex">
                            <img src="https://demo-kalles-4-1.myshopify.com/cdn/shop/files/cat-accessories_09479ede-773b-4e63-ae52-dc9100148266.jpg" alt="" />
                            <span>abc</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
