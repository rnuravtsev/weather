import React, { FC } from 'react';
import { getWeekDay } from "./utils";
import { IForecastOneDay } from "../../types";
import './Week.css'

interface IWeekDayForecast {
    forecast?: IForecastOneDay
}

const WeekDayForecast: FC<IWeekDayForecast> = ({ forecast }) => {
    const weekDay = new Date((forecast?.weekDay || 0) * 1000).getDay();

    const temperatureMax = forecast?.temperature_max ? Math.floor(forecast?.temperature_max) : 'нет данных';
    const temperatureMin = forecast?.temperature_min ? Math.floor(forecast?.temperature_min) : 'нет данных';

    return (
        <li className="week__day">
            <p>
                {getWeekDay(weekDay)}
            </p>
            <i className="city__icon">
                ---
                weather-icon
                ---
                {/*{forecast?.weather_icon}*/}
            </i>
            <div className="week__temperature">
                <p className="week__temp_max">{temperatureMax}<sup>&#176;</sup></p>
                <p className="week__temp_min">{temperatureMin}<sup>&#176;</sup></p>
            </div>
        </li>
    );
};

export default WeekDayForecast;
