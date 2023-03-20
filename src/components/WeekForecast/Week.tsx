import React from 'react'
import type { FC } from 'react'
import CityWeekDayForecast from './WeekDayForecast'
import type { IForecastOneDayAPI } from '../../models/IForecastOneDayAPI'
import type { IForecastOneDay } from '../../types'

interface IWeekForecastProps {
    list?: IForecastOneDayAPI[]
}

const WeekForecast: FC<IWeekForecastProps> = ({ list }) => {
    const mapOneDayForecast = (data?: IForecastOneDayAPI): IForecastOneDay | undefined => ({
        weekDay: data?.dt,
        temperatureMax: data?.temp.max,
        temperatureMin: data?.temp.min,
        iconId: data?.weather[0].id,
    })
    return (
        <section className="city__week week">
            <h2 className="week__title">Week forecast</h2>
            <table className="week__table">
                <tbody>
                    {list?.map((el, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <CityWeekDayForecast forecast={mapOneDayForecast(el)} key={`${i}-weekForecast`} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default WeekForecast
