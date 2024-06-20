import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import DropdownLang from './DropdownLang';
import DropdownPrice from './DropdownPrice';

const HeaderTop = () => {
    const [isOpenLang, setOpenLang] = useState(false);
    const [lang, setLang] = useState('en');
    const [isOpenPrice, setOpenPrice] = useState(false);
    const [price, setPrice] = useState('VND');

    return (
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
                    Summer sale discount off <strong className="rate-sale">50%!</strong> Shop Now
                </a>
            </div>
            <div className="content-language-price d-flex">
                <div className="location mr-inline-start">
                    <FontAwesomeIcon icon={faLocationDot} width={'8px'} />
                    Location
                </div>
                <DropdownLang
                    isOpen={isOpenLang}
                    toggleDropdown={() => setOpenLang(!isOpenLang)}
                    setLang={setLang}
                    lang={lang}
                />
                <DropdownPrice
                    isOpen={isOpenPrice}
                    toggleDropdown={() => setOpenPrice(!isOpenPrice)}
                    setPrice={setPrice}
                    price={price}
                />
            </div>
        </div>
    );
};

export default HeaderTop;
