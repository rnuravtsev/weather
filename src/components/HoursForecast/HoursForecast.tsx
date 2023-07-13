import React from 'react'
import type { FC } from 'react'
import { MAX_HOUR_CONT_FORECAST } from '../../shared/consts'
import HourForecast from './HourForecast'
import type { IHourForecastAPI } from '../../services/models/IHourForecastAPI'
import type { IHourForecast } from '../../shared/types'

interface IHoursForecastProps {
    hours?: IHourForecastAPI[]
}

const HoursForecast: FC<IHoursForecastProps> = ({ hours }) => {
    const mapOneHourForecast = (data?: IHourForecastAPI): IHourForecast | undefined => ({
        hour: data?.dt,
        temperature: data?.temp,
        iconId: data?.weather[0].id,
    })
    return (
        <section className="city__hours hours">
            <h2 className="hours__title">Hour forecast</h2>
            <ul className="hours__forecast">
                {hours?.slice(0, MAX_HOUR_CONT_FORECAST).map((hour, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <HourForecast key={`hour-forecast-${i}`} hourForecast={mapOneHourForecast(hour)} />
                ))}
            </ul>
        </section>
    )
}

export default HoursForecast
