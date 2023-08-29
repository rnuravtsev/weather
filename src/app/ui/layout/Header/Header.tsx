import React from 'react'
import { SearchContainer } from '../../../../entity/location/ui/Search'
import { ThemeSwitcher } from '../../../../entity/theme/ui/ThemeSwitcher'

import './Header.scss'

export const Header = () => (
    <header className="header">
        <h1>&ldquo;Weather&rdquo;</h1>
        <SearchContainer />
        <ThemeSwitcher />
    </header>
)
