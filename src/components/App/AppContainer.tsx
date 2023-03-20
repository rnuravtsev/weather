import React, { useEffect } from 'react'
import { AppTheme } from '../../consts'
import { userGeoConfirm } from '../../ducks/ActionCreators'
import { setUserTheme } from '../../ducks/slices/userSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import App from './App'
import type { RootState } from '../../ducks/store'

const AppContainer = () => {
    const appTheme = useAppSelector((state: RootState) => state.userReducer.theme)
    const weather = useAppSelector((state: RootState) => state.userReducer.currentCity?.weather[0].main)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const windowThemeChangeHandler = (evt: MediaQueryListEvent) => {
            if (evt.matches) {
                dispatch(setUserTheme(AppTheme.Dark))
            } else {
                dispatch(setUserTheme(AppTheme.Light))
            }
        }

        dispatch(userGeoConfirm(dispatch))

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', windowThemeChangeHandler)

        return () =>
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', windowThemeChangeHandler)
    }, [])
    return <App weather={weather} theme={appTheme} />
}

export default AppContainer
