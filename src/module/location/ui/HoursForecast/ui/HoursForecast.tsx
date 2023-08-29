import type { FC } from 'react'
import React from 'react'
import type { HourForecastDto } from '@shared/api/model'
import { MAX_HOUR_CONT_FORECAST } from '@shared/constants'
import HourForecast from './HourForecast'
import { mapOneHourForecast } from '../lib'

interface IHoursForecastProps {
    hours?: HourForecastDto[]
}

export const HoursForecast: FC<IHoursForecastProps> = ({ hours }) => (
    <section className="hours">
        <h2 className="hours__title">Hour forecast</h2>
        <ul className="hours__forecast">
            {hours?.slice(0, MAX_HOUR_CONT_FORECAST).map((hour, i) => (
                <HourForecast
                    key={`hour-forecast-${i}`}
                    hourForecast={mapOneHourForecast(hour)}
                />
            ))}
        </ul>
    </section>
)
