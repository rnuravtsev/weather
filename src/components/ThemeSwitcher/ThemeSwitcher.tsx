import classNames from 'classnames'
import React, { memo } from 'react'
import { useAppDispatch, useAppSelector } from '../../ducks/hooks/redux'
import { AppTheme } from '../../shared/model/types'
import { selectUserTheme, setUserTheme } from '../../ducks/slices/app.slice'

import './ThemeSwitcher.scss'

export const ThemeSwitcher = memo(() => {
    const appTheme = useAppSelector(selectUserTheme)
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
    }

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
                    onClick={onButtonClick}
                    type="button"
                    aria-label="Switch between dark and light theme"
                />
            </div>
        </section>
    )
})
