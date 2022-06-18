import React, { useState } from 'react';
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setUserTheme } from "../../ducks/slices/userSlice";
import { RootState } from "../../ducks/store";
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
    const appTheme = useAppSelector((state: RootState) => state.userReducer.theme);
    const [dark, setDark] = useState(appTheme === 'dark');
    const dispatch = useAppDispatch();

    const onButtonClick = () => {
        switch (appTheme) {
            case 'light':
                dispatch(setUserTheme('dark'));
                break;
            case 'dark':
                dispatch(setUserTheme('light'));
                break;
            default:
                dispatch(setUserTheme('light'));
        }
        setDark(!dark);
    }

    return (
        <section className="theme-switcher">
            <h2 className="visually-hidden">Переключатель цветовой темы</h2>
            <div className='theme-switcher__wrapper'>
                {
                    !dark
                        ? <i className="theme-switcher__icon theme-switcher__icon_sun">🌞</i>
                        : <i className="theme-switcher__icon theme-switcher__icon_moon">🌜</i>
                }
                <button className={classNames(
                    'btn',
                    'theme-switcher__btn',
                    {
                        'theme-switcher__btn_type_dark': dark,
                        'theme-switcher__btn_type_light': !dark
                    },
                )}
                onClick={onButtonClick}
                aria-label="Switch between dark and light mode"
                />
            </div>
        </section>
    );
};

export default ThemeSwitcher;
