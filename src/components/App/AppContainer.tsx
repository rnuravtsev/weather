import React, { useEffect, memo } from 'react'
import { AppTheme } from '../../shared/consts'
import { userGeoConfirm } from '../../ducks/ActionCreators'
import { selectUserTheme, selectWeather, setUserTheme } from '../../ducks/slices/userSlice'
import { useAppDispatch, useAppSelector } from '../../ducks/hooks/redux'
import App from './App'

const AppContainer = memo(() => {
    const appTheme = useAppSelector(selectUserTheme)
    const weather = useAppSelector(selectWeather)
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
    }, [dispatch])

    return <App weather={weather} theme={appTheme} />
})

export default AppContainer
