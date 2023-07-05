import React from 'react'
import { ToastContainer } from 'react-toastify'
import type { FC } from 'react'
import { AppTheme, WeatherForecast } from '../../shared/consts'
import CityContainer from '../City/CityContainer'
import Date from '../Date/Date'
import FavsContainer from '../Favs/FavsContainer'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Lightnings from '../Lightnings/Lightnings'

import 'modern-normalize/modern-normalize.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'

interface IApp {
    theme: string
    weather?: string
}

const App: FC<IApp> = ({ theme, weather }) => {
    const isLightnings =
        (weather === WeatherForecast.Storm || weather === WeatherForecast.Thunderstorm) &&
        theme === AppTheme.Dark
    return (
        <Lightnings in={isLightnings}>
            <div className={`app app_theme_${theme.toLowerCase()} app_weather_${weather?.toLowerCase()}`}>
                <div className="app__header">
                    <Header />
                </div>
                <main className="app__main">
                    <Date />
                    <CityContainer />
                    <FavsContainer />
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

export default App
