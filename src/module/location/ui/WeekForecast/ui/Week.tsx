import React from 'react'
import type { FC } from 'react'
import type { ForecastOneDayDto } from '@shared/api/model'
import { WeekDayForecast } from './WeekDayForecast'

import type { OneDayForecast } from '../../../model'

type WeekForecastProps = {
    list?: ForecastOneDayDto[]
}

export const WeekForecast: FC<WeekForecastProps> = ({ list }) => {
    const mapOneDayForecast = (data?: ForecastOneDayDto): OneDayForecast | undefined => ({
        weekDay: data?.dt,
        temperatureMax: data?.temp.max,
        temperatureMin: data?.temp.min,
        iconId: data?.weather[0].id,
    })
    return (
        <section className="week">
            <h2 className="week__title">Week forecast</h2>
            <table className="week__table">
                <tbody>
                    {list?.map((el, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <WeekDayForecast
                            key={`${i}-weekForecast`}
                            forecast={mapOneDayForecast(el)}
                        />
                    ))}
                </tbody>
            </table>
        </section>
    )
}
