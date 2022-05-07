import React, { ReactEventHandler, useEffect, useState } from 'react';
import App from "./App";
import { useAppDispatch } from "../../hooks/redux";
import { userGeoConfirm } from "../../ducks/ActionCreators";

const AppContainer = () => {
    const [theme, switchTheme] = useState('light');
    const dispatch = useAppDispatch()

    useEffect(() => {
        //TODO: Изменить тип аргумента
        const windowThemeChangeHandler = (evt: any) => {
            if (evt.matches) {
                switchTheme('dark')
            } else {
                switchTheme('light')
            }
        }

        dispatch(userGeoConfirm(dispatch))

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', windowThemeChangeHandler)

        return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', windowThemeChangeHandler)
    }, [])
    return (
        <App theme={theme}/>
    );
};

export default AppContainer;
