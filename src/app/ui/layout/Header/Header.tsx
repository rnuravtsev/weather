import React from 'react'
import { SearchContainer } from '@module/location/ui/Search'
import { ThemeSwitcher } from '@module/theme/ui/ThemeSwitcher'

import './Header.scss'

export const Header = () => (
    <header className="header">
        <h1>&ldquo;Weather&rdquo;</h1>
        <SearchContainer />
        <ThemeSwitcher />
    </header>
)
