import React from 'react'
import { ToastContainer } from 'react-toastify'
import type { FC } from 'react'
import classNames from 'classnames'
import { CityContainer } from '../entity/location/ui/City'
import { Date } from '../entity/location/ui/Date'
import { Footer } from './ui/layout/Footer/Footer'
import { Header } from './ui/layout/Header/Header'
import { Lightnings } from './ui/Lightnings/Lightnings'
import { AppTheme, WeatherType } from '../shared/types'
import { Favorites } from '../entity/user/ui/Favorites'

import './App.scss'

interface IApp {
    theme: string
    weather?: string
}

export const App: FC<IApp> = ({ theme, weather }) => {
    const isLightnings =
        theme === AppTheme.Dark &&
        (weather === WeatherType.Storm || weather === WeatherType.Thunderstorm)

    return (
        <Lightnings in={isLightnings}>
            <div
                className={classNames('app', {
                    [`app_theme_${theme}`]: theme,
                    [`app_weather_${weather?.toLowerCase()}`]: weather,
                })}
            >
                <div className="app__header">
                    <Header />
                </div>
                <main className="app__main">
                    <Date />
                    <CityContainer />
                    <Favorites />
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
}
