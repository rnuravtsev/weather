import React, { memo } from 'react'
import { selectUserTheme, selectWeather } from '../../ducks/slices/app.slice'
import { useAppSelector } from '../../ducks/hooks/redux'
import { App } from './App'
import { useThemeSwitch } from './hooks/useThemeSwitch'

export const AppContainer = memo(() => {
    const appTheme = useAppSelector(selectUserTheme)
    const weather = useAppSelector(selectWeather)

    useThemeSwitch()

    return <App weather={weather} theme={appTheme} />
})
