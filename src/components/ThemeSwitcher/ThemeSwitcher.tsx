import classNames from 'classnames'
import React, { useState, memo } from 'react'
import { useAppDispatch, useAppSelector } from '../../ducks/hooks/redux'
import { AppTheme } from '../../shared/types'
import { selectUserTheme, setUserTheme } from '../../ducks/slices/app.slice'

import './ThemeSwitcher.scss'

export const ThemeSwitcher = memo(() => {
    const appTheme = useAppSelector(selectUserTheme)
    const [dark, setDark] = useState(appTheme === AppTheme.Dark)
    const dispatch = useAppDispatch()

    const onButtonClick = () => {
        switch (appTheme) {
            case AppTheme.Light:
                dispatch(setUserTheme(AppTheme.Dark))
                break
            case AppTheme.Dark:
                dispatch(setUserTheme(AppTheme.Light))
                break
            default:
                dispatch(setUserTheme(AppTheme.Light))
        }
        setDark(!dark)
    }

    return (
        <section className="theme-switcher">
            <h2 className="visually-hidden">Переключатель цветовой темы</h2>
            <div className="theme-switcher__wrapper">
                {!dark ? (
                    <i className="theme-switcher__icon theme-switcher__icon_sun">🌞</i>
                ) : (
                    <i className="theme-switcher__icon theme-switcher__icon_moon">🌜</i>
                )}
                <button
                    className={classNames('btn', 'theme-switcher__btn', {
                        'theme-switcher__btn_type_dark': dark,
                        'theme-switcher__btn_type_light': !dark,
                    })}
                    onClick={onButtonClick}
                    type="button"
                    aria-label="Switch between dark and light theme"
                />
            </div>
        </section>
    )
})
