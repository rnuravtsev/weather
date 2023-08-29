import React, { memo } from 'react'
import { App } from './App'
import { useSystemTheme } from './hooks'
import { useAppSelector } from '../shared/model/hooks'
import { selectWeather } from '../entity/location/model'
import { selectUserTheme } from '../entity/theme/model/themeSlice'

export const AppContainer = memo(() => {
    const appTheme = useAppSelector(selectUserTheme)
    const weather = useAppSelector(selectWeather)

    useSystemTheme()

    return <App weather={weather} theme={appTheme} />
})
