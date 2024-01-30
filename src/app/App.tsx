import React, { memo } from 'react'
import { ToastContainer } from 'react-toastify'
import type { FC } from 'react'
import classNames from 'classnames'
import type { BaseComponentProps } from '@shared/types'
import { AppStatus, AppTheme, WeatherType } from '@shared/types'
import { Favorites } from '@module/user/ui/Favorites'
import { City } from '@module/location/ui/City'
import { Date } from '@module/location/ui/Date'
import { useAppSelector } from '@shared/store'
import { selectUserTheme } from '@module/theme/store/themeSlice'
import { selectCurrentCity, selectWeather } from '@module/location/store'
import { useSystemTheme, useRequestUserLocation, useNetworkStatus } from '@app/hooks'
import { selectFavoriteCities } from '@module/user/store'
import { selectAppStatus } from '@app/store/appSlice'
import { Footer } from '@app/ui/Layout/Footer/Footer'
import { Header } from '@app/ui/Layout/Header/Header'
import { SplashScreen } from '@app/ui/SplashScreen/SplashScreen'
import { Lightnings } from './ui/Lightnings/Lightnings'

import './App.scss'

type AppProps = BaseComponentProps

export const App: FC<AppProps> = memo(({ className = '' }) => {
    useRequestUserLocation()
    useSystemTheme()
    useNetworkStatus()

    const theme = useAppSelector(selectUserTheme)
    const weather = useAppSelector(selectWeather)

    const appStatus = useAppSelector(selectAppStatus)
    const favorites = useAppSelector(selectFavoriteCities)
    const currentCity = useAppSelector(selectCurrentCity)

    const isLightnings =
        theme === AppTheme.Dark &&
        (weather === WeatherType.Storm || weather === WeatherType.Thunderstorm)

    switch (appStatus) {
        case AppStatus.Pending:
            return <SplashScreen />
        case AppStatus.Ready:
            return (
                <Lightnings in={isLightnings}>
                    <div
                        className={classNames('app', className, {
                            [`app_theme_${theme}`]: theme,
                            [`app_weather_${weather?.toLowerCase()}`]: weather,
                            app_mode_fullFocus: !currentCity && favorites?.length === 0,
                        })}
                    >
                        <div className="app__header">
                            <Header />
                        </div>
                        <main
                            className={classNames('app__main', {
                                app__main_column_single: !favorites?.length,
                            })}
                        >
                            <Date />
                            <City />
                            {!!favorites?.length && <Favorites className="app__favs" />}
                        </main>
                        <div className="app__footer">
                            <Footer />
                        </div>
                        <ToastContainer />
                        {theme === AppTheme.Dark && (
                            <>
                                <div id="stars" />
                                <div id="stars2" />
                                <div id="stars3" />
                            </>
                        )}
                    </div>
                </Lightnings>
            )
        default:
            return null
    }
})
