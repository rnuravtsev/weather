import type { FC } from 'react'
import React from 'react'
import { MAX_HOUR_CONT_FORECAST } from '../../shared/consts'
import HourForecast from './HourForecast'
import type { IHourForecastAPI } from '../../api/models/IHourForecastAPI'
import { mapOneHourForecast } from './lib'

interface IHoursForecastProps {
    hours?: IHourForecastAPI[]
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
