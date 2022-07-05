import React, { FC } from 'react';
import { ToastContainer } from "react-toastify";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CityContainer from "../../components/City/CityContainer";
import FavsContainer from "../Favs/FavsContainer";
import Date from "../Date/Date";
import Lightnings from "../Lightnings/Lightnings";
import 'modern-normalize/modern-normalize.css'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { AppTheme, WeatherForecast } from "../../consts";

interface IApp {
    theme: string,
    weather?: string
}

const App: FC<IApp> = ({ theme, weather }) => {
    const isLightnings = (weather === WeatherForecast.Storm || weather === WeatherForecast.Thunderstorm) && theme === AppTheme.Dark
    return (
        <Lightnings in={isLightnings}>
            <div className={`app app_theme_${theme.toLowerCase()} app_weather_${weather?.toLowerCase()}`}>
                <div className="app__header">
                    <Header/>
                </div>
                <main className="app__main">
                    <Date/>
                    <CityContainer/>
                    <FavsContainer/>
                </main>
                <div className="app__footer">
                    <Footer/>
                </div>
                <ToastContainer/>
                {theme === AppTheme.Dark &&
                    (
                        <>
                            <div id="stars"/>
                            <div id="stars2"/>
                            <div id="stars3"/>
                        </>
                    )
                }
            </div>
        </Lightnings>
    );
}

export default App;
