import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavigationMenu from './NavigationMenu';
import IconGroup from './IconGroup';

const HeaderBottom = ({ setShowLoginSlideBar, setShowSideBar, setShowSideBarCart }) => {
    return (
        <div className="header-bottom d-flex">
            <div className="sidebar-menu d-none" onClick={() => { setShowSideBar(true) }} >
                <FontAwesomeIcon icon={faBars} />
            </div>
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
            <NavigationMenu />
            <IconGroup
                setShowLoginSlideBar={setShowLoginSlideBar}
                setShowSideBarCart={setShowSideBarCart}
            />
        </div>
    );
};

export default HeaderBottom;
