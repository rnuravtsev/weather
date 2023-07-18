import React from 'react'
import type { FC } from 'react'
import type { IForecastOneDay } from '../../shared/model/types'
import { getWeekDay } from './lib'
import { renderWeatherIcon } from '../../shared/lib'

import './Week.scss'

interface IWeekDayForecast {
    forecast?: IForecastOneDay
}

export const WeekDayForecast: FC<IWeekDayForecast> = ({ forecast }) => {
    const { temperatureMin, temperatureMax, iconId, weekDay } = forecast || {}
    const certainDay = new Date((weekDay || 0) * 1000).getDay()

    const resolveTemperatureMax = temperatureMax
        ? Math.floor(temperatureMax)
        : 'нет данных'
    const resolveTemperatureMin = temperatureMin
        ? Math.floor(temperatureMin)
        : 'нет данных'

    return (
        <tr className="week__day">
            <td className="week__certain">{getWeekDay(certainDay)}</td>
            <td className="week__weather-icon">{renderWeatherIcon(iconId)}</td>
            <td className="week__temperature">
                <p className="week__temp_max">
                    {resolveTemperatureMax}
                    <sup>&#176;</sup>
                </p>
                <p className="week__temp_min">
                    {resolveTemperatureMin}
                    <sup>&#176;</sup>
                </p>
            </td>
        </tr>
    )
}
