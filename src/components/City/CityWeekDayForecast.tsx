import React, { FC } from 'react';
import { IForecastOneDayAdapter } from "../../models/IForecastOneDayAdapter";
import { getWeekDay } from "./utils";

interface ICityWeekDayForecast {
    forecast?: IForecastOneDayAdapter
}

const CityWeekDayForecast: FC<ICityWeekDayForecast> = ({ forecast }) => {
    const weekDay = new Date((forecast?.weekDay || 0) * 1000).getDay();

    const temperatureMax = forecast?.temperature_max ? Math.floor(forecast?.temperature_max) : 'нет данных';
    const temperatureMin = forecast?.temperature_min ? Math.floor(forecast?.temperature_min) : 'нет данных';

    return (
        <li className="city__week-day">
            <p>
                {getWeekDay(weekDay)}
            </p>
            <i className="city__icon">
                ---
                weather-icon
                ---
                {/*{forecast?.weather_icon}*/}
            </i>
            <div className="city__week-temperature">
                <p className="city__week-max">{temperatureMax}<sup>&#176;</sup></p>
                <p className="city__week-min">{temperatureMin}<sup>&#176;</sup></p>
            </div>
        </li>
    );
};

export default CityWeekDayForecast;
