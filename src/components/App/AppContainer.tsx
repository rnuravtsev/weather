import React, { useEffect } from 'react';
import App from "./App";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { userGeoConfirm } from "../../ducks/ActionCreators";
import { RootState } from "../../ducks/store";
import { setUserTheme } from "../../ducks/slices/userSlice";

const AppContainer = () => {
    const appTheme = useAppSelector((state: RootState) => state.userReducer.theme);
    const weather = useAppSelector((state: RootState) => state.userReducer.currentCity?.weather[0].main)
    const dispatch = useAppDispatch()

    console.log(weather)

    useEffect(() => {
        //TODO: Изменить тип аргумента
        const windowThemeChangeHandler = (evt: any) => {
            if (evt.matches) {
                dispatch(setUserTheme('dark'));
            } else {
                dispatch(setUserTheme('light'));
            }
        }

        dispatch(userGeoConfirm(dispatch))

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', windowThemeChangeHandler)

        return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', windowThemeChangeHandler)
    }, [])
    return (
        <App weather={weather} theme={appTheme}/>
    );
};

export default AppContainer;
