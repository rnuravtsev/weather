import type { FC } from 'react'
import React from 'react'
import { MAX_HOUR_CONT_FORECAST } from '../../shared/consts'
import HourForecast from './HourForecast'
import { mapOneHourForecast } from './lib'
import type { HourForecastDto } from '../../shared/api/model'

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
