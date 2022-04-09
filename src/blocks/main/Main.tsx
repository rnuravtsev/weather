import React, { FC } from 'react';
import { IWeather } from "../../models/IWeather";

interface MainProps {
    weather: IWeather
}

const Main: FC<MainProps> = ({ weather }) => {
    return (
        <main className="main">
            <h1>Прогноз погоды</h1>
            <pre>
                {JSON.stringify(weather, null, 2)}
            </pre>
        </main>
    );
};

export default Main;
