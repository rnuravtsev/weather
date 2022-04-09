import React, { useEffect } from 'react';
import './App.css';
import Header from "./blocks/header/Header";
import Footer from "./blocks/footer/Footer";
import Main from "./blocks/main/Main";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { RootState } from "./ducks/store";
import { fetchWeather } from "./ducks/reducers/ActionCreators";
import WeatherContainer from "./blocks/WeatherContainer";

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchWeather())
    }, []);

    return (
        <>
            <Header/>
            <WeatherContainer/>
            <Footer/>
        </>
    );
}

export default App;
