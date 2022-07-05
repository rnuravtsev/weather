import React, { FC } from 'react';
import { getWeekDay } from "./utils";
import { IForecastOneDay } from "../../types";
import { renderWeatherIcon } from "../City/utils";
import './Week.css'

interface IWeekDayForecast {
    forecast?: IForecastOneDay
}

const WeekDayForecast: FC<IWeekDayForecast> = ({ forecast }) => {
    const { temperature_min, temperature_max, icon_id, weekDay } = forecast || {}
    const certainDay = new Date((weekDay || 0) * 1000).getDay();

    const temperatureMax = temperature_max ? Math.floor(temperature_max) : 'нет данных';
    const temperatureMin = temperature_min ? Math.floor(temperature_min) : 'нет данных';

    return (
        <tr className="week__day">
            <td className="week__certain">
                {getWeekDay(certainDay)}
            </td>
            <td className="week__weather-icon">
                {renderWeatherIcon(icon_id)}
            </td>
            <td className="week__temperature">
                <p className="week__temp_max">{temperatureMax}<sup>&#176;</sup></p>
                <p className="week__temp_min">{temperatureMin}<sup>&#176;</sup></p>
            </td>
        </tr>
    );
};

export default WeekDayForecast;
