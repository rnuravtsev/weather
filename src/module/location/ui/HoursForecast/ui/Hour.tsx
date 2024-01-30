import React, { useMemo } from 'react'
import type { FC } from 'react'
import { renderWeatherIcon } from '@shared/lib'

import type { BaseComponentProps } from '@shared/types'
import classNames from 'classnames'
import type { HourForecast } from '../../../store'

import './Hour.scss'

type CityHourForecastProps = BaseComponentProps & {
    hourForecast?: HourForecast
}

export const Hour: FC<CityHourForecastProps> = ({ className = '', hourForecast }) => {
    const { hour, temperature, iconId } = hourForecast || {}

    const peopleHour = useMemo(
        () => (hour ? new Date(hour * 1000).getHours() : null),
        [hour],
    )

    return (
        <li className={classNames('hour', className)}>
            <p className="hour__time">{peopleHour}</p>
            {renderWeatherIcon(iconId)}
            <p className="hour__temperature">
                {temperature && Math.floor(temperature)}&#176;
            </p>
        </li>
    )
}
