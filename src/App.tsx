import React, { useEffect } from 'react';
import './App.css';
import Header from "./blocks/header/Header";
import Footer from "./blocks/footer/Footer";
import Main from "./blocks/main/Main";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { RootState } from "./ducks/store";
import { fetchWeather } from "./ducks/reducers/ActionCreators";

function App() {
    const { weather, isLoading, error } = useAppSelector((state: RootState) => state.weatherReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchWeather())
    }, []);

    return (
        <>
            {isLoading && 'loading...'}
            {error && 'Ошибка...'}
            <Header/>
            <Main weather={weather}/>
            <Footer/>
        </>
    );
}

export default App;
