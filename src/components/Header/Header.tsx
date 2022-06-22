import React from 'react';
import './Header.css'
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import SearchContainer from "../Search/SearchContainer";

const Header = () => {
    return (
        <header className="header">
            <h1>"Weather"   </h1>
            <SearchContainer/>
            <ThemeSwitcher/>
        </header>
    );
};

export default Header;
