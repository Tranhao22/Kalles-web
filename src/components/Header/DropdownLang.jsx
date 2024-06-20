import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const listLang = [
    { id: 0, key: "en", name: "English" },
    { id: 1, key: "vi", name: "Tiếng Việt" },
];

const DropdownLang = ({ isOpen, toggleDropdown, setLang, lang }) => {
    return (
        <div className="languages mr-inline-start">
            <div className="parent current-lang" onClick={toggleDropdown}>
                {listLang.find(item => item.key === lang)?.name}
                <FontAwesomeIcon icon={faChevronDown} width={'8px'} />
            </div>
            <div className={`dropdown d-none ${isOpen && 'open'}`}>
                {listLang.map((item, index) => (
                    <div className={`item ${item.key === lang ? 'active' : ''}`} key={index} >
                        <a onClick={() => setLang(item.key)}>{item.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownLang;
