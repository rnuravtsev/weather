import React, { memo } from 'react'
import { ToastContainer } from 'react-toastify'
import type { FC } from 'react'
import classNames from 'classnames'
import type { BaseComponentProps } from '@shared/types'
import { AppTheme, WeatherType } from '@shared/types'
import { Favorites } from '@module/user/ui/Favorites'
import { City } from '@module/location/ui/City'
import { Date } from '@module/location/ui/Date'
import { useAppSelector } from '@shared/store'
import { selectUserTheme } from '@module/theme/store/themeSlice'
import { selectWeather } from '@module/location/store'
import { useSystemTheme } from '@app/hooks'
import { useNetworkStatus } from '@app/hooks/useNetworkStatus'
import { selectFavoriteCities } from '@module/user/store'
import { Footer } from './ui/layout/Footer/Footer'
import { Header } from './ui/layout/Header/Header'
import { Lightnings } from './ui/Lightnings/Lightnings'

import './App.scss'

type AppProps = BaseComponentProps

export const App: FC<AppProps> = memo(({ className = '' }) => {
    useSystemTheme()
    useNetworkStatus()

    const theme = useAppSelector(selectUserTheme)
    const weather = useAppSelector(selectWeather)

    const favorites = useAppSelector(selectFavoriteCities)

    const isLightnings =
        theme === AppTheme.Dark &&
        (weather === WeatherType.Storm || weather === WeatherType.Thunderstorm)

    return (
        <Lightnings in={isLightnings}>
            <div
                className={classNames('app', className, {
                    [`app_theme_${theme}`]: theme,
                    [`app_weather_${weather?.toLowerCase()}`]: weather,
                })}
            >
                <div className="app__header">
                    <Header />
                </div>
                <main
                    className={classNames('app__main', {
                        app__main_mono: !favorites?.length,
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
})
