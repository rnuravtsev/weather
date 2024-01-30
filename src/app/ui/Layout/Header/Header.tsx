import type { FC } from 'react'
import React from 'react'
import { ThemeSwitcher } from '@module/theme/ui/ThemeSwitcher'
import { Search } from '@module/location/ui/Search/ui/Search'
import type { BaseComponentProps } from '@shared/types'
import classNames from 'classnames'

import './Header.scss'

type HeaderProps = BaseComponentProps

export const Header: FC<HeaderProps> = ({ className = '' }) => (
    <header className={classNames('header', className)}>
        <h1 className="header__title">&ldquo;Weather&rdquo;</h1>
        <Search />
        <ThemeSwitcher className="header__theme-switcher" />
    </header>
)
