import React from 'react';
import './Header.css'
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
    return (
        <header className="header">
            <h1>Weather</h1>
            <ThemeSwitcher/>
        </header>
    );
};

export default Header;
