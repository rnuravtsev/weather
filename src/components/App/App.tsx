import React, { FC } from 'react';
import { ToastContainer } from "react-toastify";
import './App.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CityContainer from "../../components/City/CityContainer";
import Favs from "../Favs/Favs";
import Date from "../Date/Date";
import SearchContainer from "../Search/SearchContainer";
import Save from "../Save/Save";
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
                <SearchContainer/>
                <Save/>
                <CityContainer/>
                <Favs/>
            </main>
            <div className="app__footer">
                <Footer/>
            </div>
            <ToastContainer />
        </div>
    );
}

export default App;
