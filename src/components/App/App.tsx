import React, { FC } from 'react';
import { ToastContainer } from "react-toastify";
import './App.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CityContainer from "../../components/City/CityContainer";
import FavsContainer from "../Favs/FavsContainer";
import Date from "../Date/Date";
import 'react-toastify/dist/ReactToastify.css';

interface IApp {
    theme: string
}

const App: FC<IApp> = ({ theme }) => {
    return (
        <div className={`app app_theme_${theme}`}>
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
