import React, { FC } from 'react';
import { getWeekDay } from "./utils";
import { IForecastOneDay } from "../../types";
import { renderWeatherIcon } from "../City/utils";
import './Week.css'

interface IWeekDayForecast {
    forecast?: IForecastOneDay
}

const WeekDayForecast: FC<IWeekDayForecast> = ({ forecast }) => {
    const weekDay = new Date((forecast?.weekDay || 0) * 1000).getDay();

    const temperatureMax = forecast?.temperature_max ? Math.floor(forecast?.temperature_max) : 'нет данных';
    const temperatureMin = forecast?.temperature_min ? Math.floor(forecast?.temperature_min) : 'нет данных';

    return (
        <tr className="week__day">
            <td className="week__certain">
                {getWeekDay(weekDay)}
            </td>
            <td className="week__weather-icon">
                {renderWeatherIcon(forecast?.icon_id)}
            </td>
            <td className="week__temperature">
                <p className="week__temp_max">{temperatureMax}<sup>&#176;</sup></p>
                <p className="week__temp_min">{temperatureMin}<sup>&#176;</sup></p>
            </td>
        </tr>
    );
};

export default WeekDayForecast;
