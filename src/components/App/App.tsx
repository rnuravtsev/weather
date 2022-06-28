import React, { FC } from 'react';
import { ToastContainer } from "react-toastify";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CityContainer from "../../components/City/CityContainer";
import FavsContainer from "../Favs/FavsContainer";
import Date from "../Date/Date";
import 'modern-normalize/modern-normalize.css'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

interface IApp {
    theme: string,
    weather?: string
}

const App: FC<IApp> = ({ theme, weather }) => {
    return (
        <div className={`app app_theme_${theme} app_weather_${weather?.toLowerCase()}`}>
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
            {theme === 'dark' &&
            (
                <>
                    <div id="stars"/>
                    <div id="stars2"/>
                    <div id="stars3"/>
                </>
            )
            }
        </div>
    );
}

export default App;
