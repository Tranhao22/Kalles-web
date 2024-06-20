import { useState } from 'react';
import "../Header.css";
import HeaderTop from './Header/HeaderTop';
import HeaderBottom from './Header/HeaderBottom';
import LoginSidebar from './Header/LoginSidebar';
import Sidebar from './Header/Sidebar';
import CartSidebar from './Header/CartSidebar';

const Header = () => {
    const [isShowLoginSlideBar, setShowLoginSlideBar] = useState(false);
    const [isShowSideBar, setShowSideBar] = useState(false);
    const [isShowSideBarCart, setShowSideBarCart] = useState(false);

    const closeAllSidebars = () => {
        setShowLoginSlideBar(false);
        setShowSideBar(false);
        setShowSideBarCart(false);
    };

    return (
        <header className="header d-flex">
            <HeaderTop />
            <HeaderBottom
                setShowLoginSlideBar={setShowLoginSlideBar}
                setShowSideBar={setShowSideBar}
                setShowSideBarCart={setShowSideBarCart}
            />
            <div className={`t4s-close ${!(isShowLoginSlideBar || isShowSideBar || isShowSideBarCart) ? "d-none" : ""}`} 
                onClick={closeAllSidebars}></div>
                
            <div className={`w-100 ${!isShowLoginSlideBar ? "d-none" : ""}`}>
                <LoginSidebar isShowLoginSlideBar={isShowLoginSlideBar} setShowLoginSlideBar={setShowLoginSlideBar} />
            </div>
            <div className={`w-100 ${!isShowSideBar ? "d-none" : ""}`}>
                <Sidebar isShowSideBar={isShowSideBar} setShowSideBar={setShowSideBar} />
            </div>
            <div className={`w-100 ${!isShowSideBarCart ? "d-none" : ""}`}>
                <CartSidebar isShowSideBarCart={isShowSideBarCart} setShowSideBarCart={setShowSideBarCart} />
            </div>
        </header>
    );
};

export default Header;
