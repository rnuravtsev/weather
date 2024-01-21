import classNames from 'classnames'
import type { FC } from 'react'
import React, { memo } from 'react'
import type { BaseComponentProps } from '@shared/types'
import { AppTheme } from '@shared/types'
import { selectUserTheme } from '@module/theme/store/themeSlice'
import { useAppSelector } from '@shared/store'
import { useThemeSwitch } from '../hooks/useThemeSwitch'

import './ThemeSwitcher.scss'

type ThemeSwitcherProps = BaseComponentProps

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className = '' }) => {
    const appTheme = useAppSelector(selectUserTheme)
    const { toggleTheme } = useThemeSwitch(appTheme)

    return (
        <section className={classNames('theme-switcher', className)}>
            <h2 className="visually-hidden">Переключатель цветовой темы</h2>
            <div className="theme-switcher__wrapper">
                {appTheme === AppTheme.Light ? (
                    <i className="theme-switcher__icon theme-switcher__icon_sun">🌞</i>
                ) : (
                    <i className="theme-switcher__icon theme-switcher__icon_moon">🌜</i>
                )}
                <button
                    className={classNames('btn', 'theme-switcher__btn', {
                        'theme-switcher__btn_type_dark': appTheme === AppTheme.Dark,
                        'theme-switcher__btn_type_light': appTheme === AppTheme.Light,
                    })}
                    onClick={toggleTheme}
                    type="button"
                    aria-label="Switch between dark and light theme"
                />
            </div>
        </section>
    )
})
