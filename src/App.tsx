import React, { useEffect } from 'react';
import './App.css';
import Header from "./blocks/header/Header";
import Footer from "./blocks/footer/Footer";
import { useAppDispatch, } from "./hooks/redux";
import WeatherContainer from "./blocks/WeatherContainer";

function App() {
    return (
        <div className="app">
            <Header/>
            <WeatherContainer/>
            <Footer/>
        </div>
    );
}

export default App;
