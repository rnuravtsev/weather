import React, { useMemo } from 'react'
import type { FC } from 'react'
import { renderWeatherIcon } from '@shared/lib'

import type { HourForecast } from '../../../model'

export interface ICityHourForecastProps {
    hourForecast?: HourForecast
}

const CityHourForecast: FC<ICityHourForecastProps> = ({ hourForecast }) => {
    const { hour, temperature, iconId } = hourForecast || {}

    const peopleHour = useMemo(
        () => (hour ? new Date(hour * 1000).getHours() : null),
        [hour],
    )

    return (
        <li className="city__hour-forecast">
            <p className="city__hour">{peopleHour}</p>
            {renderWeatherIcon(iconId)}
            <p>{temperature && Math.floor(temperature)}&#176;</p>
        </li>
    )
}

export default CityHourForecast
