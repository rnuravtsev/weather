import React from 'react'
import { ToastContainer } from 'react-toastify'
import type { FC } from 'react'
import classNames from 'classnames'
import { CityContainer } from '../City/CityContainer'
import { Date } from '../Date/Date'
import { FavoritesContainer } from '../Favs/FavoritesContainer'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { Lightnings } from '../Lightnings/Lightnings'
import { AppTheme, WeatherForecast } from '../../shared/types'

import './App.scss'

interface IApp {
    theme: string
    weather?: string
}

export const App: FC<IApp> = ({ theme, weather }) => {
    const isLightnings =
        (weather === WeatherForecast.Storm || weather === WeatherForecast.Thunderstorm) &&
        theme === AppTheme.Dark
    return (
        <Lightnings in={isLightnings}>
            <div
                className={classNames('app', {
                    [`app_theme_${theme.toLowerCase()}`]: theme,
                    [`app_weather_${weather?.toLowerCase()}`]: weather,
                })}
            >
                <div className="app__header">
                    <Header />
                </div>
                <main className="app__main">
                    <Date />
                    <CityContainer />
                    <FavoritesContainer />
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
