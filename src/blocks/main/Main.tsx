import React from 'react';
import { IWeather } from "../../models/IWeather";

const Main = (props: any) => {
    const {weather}: IWeather = props
    return (
        <main className="main">
            <h1>Прогноз погоды</h1>
            {JSON.stringify(weather, null, 2)}
        </main>
    );
};

export default Main;
