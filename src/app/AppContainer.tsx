import React, { memo } from 'react'
import { useAppSelector } from '@shared/model/hooks'
import { selectWeather } from '@module/location/model'
import { selectUserTheme } from '@module/theme/model/themeSlice'
import { useSystemTheme } from './hooks'
import { App } from './App'

export const AppContainer = memo(() => {
    const appTheme = useAppSelector(selectUserTheme)
    const weather = useAppSelector(selectWeather)

    useSystemTheme()

    return <App weather={weather} theme={appTheme} />
})
