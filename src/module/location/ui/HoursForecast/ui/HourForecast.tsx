import React, { useMemo } from 'react'
import type { FC } from 'react'
import { renderWeatherIcon } from '@shared/lib'

import type { BaseComponentProps } from '@shared/types'
import classNames from 'classnames'
import type { HourForecast } from '../../../store'

type CityHourForecastProps = BaseComponentProps & {
    hourForecast?: HourForecast
}

const CityHourForecast: FC<CityHourForecastProps> = ({
    className = '',
    hourForecast,
}) => {
    const { hour, temperature, iconId } = hourForecast || {}

    const peopleHour = useMemo(
        () => (hour ? new Date(hour * 1000).getHours() : null),
        [hour],
    )

    return (
        <li className={classNames('city__hour-forecast', className)}>
            <p className="city__hour">{peopleHour}</p>
            {renderWeatherIcon(iconId)}
            <p>{temperature && Math.floor(temperature)}&#176;</p>
        </li>
    )
}

export default CityHourForecast
