import React from 'react'
import type { FC } from 'react'
import type { ForecastOneDayDto } from '@shared/api/model'
import type { BaseComponentProps } from '@shared/types'
import classNames from 'classnames'
import { WeekDayForecast } from './WeekDayForecast'

import type { OneDayForecast } from '../../../store'

type WeekForecastProps = BaseComponentProps & {
    list?: ForecastOneDayDto[]
}

export const WeekForecast: FC<WeekForecastProps> = ({ className = '', list }) => {
    const mapOneDayForecast = (data?: ForecastOneDayDto): OneDayForecast | undefined => ({
        weekDay: data?.dt,
        temperatureMax: data?.temp.max,
        temperatureMin: data?.temp.min,
        iconId: data?.weather[0].id,
    })
    return (
        <section className={classNames('week box', className)}>
            <h2 className="week__title title-section">Week forecast</h2>
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
