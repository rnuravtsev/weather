import type { FC } from 'react'
import React from 'react'
import type { HourForecastDto } from '@shared/api/model'
import { MAX_HOUR_CONT_FORECAST } from '@shared/constants'
import type { BaseComponentProps } from '@shared/types'
import classNames from 'classnames'
import HourForecast from './HourForecast'
import { mapOneHourForecast } from '../lib'

type HoursForecastProps = BaseComponentProps & {
    hours?: HourForecastDto[]
}

export const HoursForecast: FC<HoursForecastProps> = ({ className = '', hours }) => (
    <section className={classNames('hours box', className)}>
        <h2 className="hours__title title-section">Hour forecast</h2>
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
