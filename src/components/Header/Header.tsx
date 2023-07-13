import React from 'react'
import { SearchContainer } from '../Search/SearchContainer'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'

import './Header.scss'

export const Header = () => (
    <header className="header">
        <h1>&ldquo;Weather&rdquo;</h1>
        <SearchContainer />
        <ThemeSwitcher />
    </header>
)
