import React, { FC } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CityContainer from "./components/City/CityContainer";

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
                <CityContainer/>
            </main>
            <div className="app__footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
