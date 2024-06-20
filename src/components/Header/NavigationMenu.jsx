import React from 'react';

const listMenu = [
    {
        id: 0,
        key: "all",
        name: "All",
        path: "/",
        child: [
            {
                id: 11,
                key: "all",
                name: "All11",
                path: "/",
                child: [
                    { id: 19, key: "all", name: "All", path: "/" },
                    { id: 20, key: "all", name: "All", path: "/" }
                ]
            },
            {
                id: 12,
                key: "all",
                name: "All",
                path: "/",
                child: [
                    { id: 21, key: "all", name: "All", path: "/" },
                    { id: 22, key: "all", name: "All", path: "/" }
                ]
            },
            {
                id: 11,
                key: "all",
                name: "All11",
                path: "/",
                child: [
                    { id: 19, key: "all", name: "All", path: "/" },
                    { id: 20, key: "all", name: "All", path: "/" }
                ]
            },
            {
                id: 12,
                key: "all",
                name: "All",
                path: "/",
                child: [
                    { id: 21, key: "all", name: "All", path: "/" },
                    { id: 22, key: "all", name: "All", path: "/" }
                ]
            },
            {
                id: 11,
                key: "all",
                name: "All11",
                path: "/",
                child: [
                    { id: 19, key: "all", name: "All", path: "/" },
                    { id: 20, key: "all", name: "All", path: "/" }
                ]
            },
            {
                id: 12,
                key: "all",
                name: "All",
                path: "/",
                child: [
                    { id: 21, key: "all", name: "All", path: "/" },
                    { id: 22, key: "all", name: "All", path: "/" }
                ]
            }
        ]
    },
    { id: 1, key: "men", name: "Men", path: "/" },
    { id: 2, key: "women", name: "Women", path: "/" },
    { id: 3, key: "kids", name: "Kids", path: "/" },
    { id: 4, key: "accessories", name: "Accessories", path: "/" },
    { id: 5, key: "shoes", name: "Shoes", path: "/" },
    { id: 6, key: "bags", name: "Bags", path: "/" },
    { id: 7, key: "jewelry", name: "Jewelry", path: "/" },
];

const NavigationMenu = () => {
    const renderMenuItems = (items) => {
        return items.map(item => (
            <li key={item.id} className={item.child ? 'mega-menu has-submenu' : 'mega-menu'}>
                <a href={item.path}>{item.name}</a>
                {item.child && (
                    <div className="submenu d-none">
                        <ul className="content d-flex">
                            {renderMenuItems(item.child)}
                        </ul>
                    </div>
                )}
            </li>
        ));
    };

    return (
        <nav className="nav">
            <ul className="nav-ul d-flex">
                {renderMenuItems(listMenu)}
            </ul>
        </nav>
    );
};

export default NavigationMenu;
