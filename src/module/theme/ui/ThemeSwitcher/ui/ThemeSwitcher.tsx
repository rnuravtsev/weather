import classNames from 'classnames'
import React, { memo } from 'react'
import { useAppSelector } from '@shared/model'
import { AppTheme } from '@shared/types'
import { selectUserTheme } from '../../../model/themeSlice'
import { useThemeSwitch } from '../hooks/useThemeSwitch'

import './ThemeSwitcher.scss'

export const ThemeSwitcher = memo(() => {
    const appTheme = useAppSelector(selectUserTheme)
    const { toggleTheme } = useThemeSwitch(appTheme)

    return (
        <section className="theme-switcher">
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
