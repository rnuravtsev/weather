import React, { FC } from 'react';
import { IHourForecast } from "../../types";
import { renderWeatherIcon } from "../City/utils";

export interface ICityHourForecastProps {
    hourForecast?: IHourForecast,
}

const CityHourForecast: FC<ICityHourForecastProps> = ({ hourForecast }) => {
    const { hour, temperature, icon_id } = hourForecast || {}

    const peopleHour = hour ? new Date(hour * 1000).getHours() : null;

    return (
        <li className="city__hour-forecast">
            <p className="city__hour">{peopleHour}</p>
            {renderWeatherIcon(icon_id)}
            <p>{temperature && Math.floor(temperature)}&#176;</p>
        </li>
    );
};

export default CityHourForecast;
