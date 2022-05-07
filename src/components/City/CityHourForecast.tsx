import React, { FC } from 'react';
import { IHourForecastAdapter } from "../../models/IHourForecastAdapter";

export interface ICityHourForecastProps {
    hourForecast?: IHourForecastAdapter,
}

const CityHourForecast: FC<ICityHourForecastProps> = ({ hourForecast }) => {
    const { hour, temperature, weather_icon } = hourForecast || {}

    const peopleHour = hour ? new Date(hour * 1000).getHours() : null;

    return (
        <li className="city__hour-forecast">
            <p className="city__hour">{peopleHour}</p>
            -- w --
            <p>{temperature && Math.floor(temperature)}&#176;</p>
        </li>
    );
};

export default CityHourForecast;
