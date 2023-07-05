import React from 'react'
import type { FC } from 'react'
import { renderWeatherIcon } from '../City/utils'
import type { IHourForecast } from '../../shared/types'

export interface ICityHourForecastProps {
    hourForecast?: IHourForecast
}

const CityHourForecast: FC<ICityHourForecastProps> = ({ hourForecast }) => {
    const { hour, temperature, iconId } = hourForecast || {}

    const peopleHour = hour ? new Date(hour * 1000).getHours() : null

    return (
        <li className="city__hour-forecast">
            <p className="city__hour">{peopleHour}</p>
            {renderWeatherIcon(iconId)}
            <p>{temperature && Math.floor(temperature)}&#176;</p>
        </li>
    )
}

export default CityHourForecast
