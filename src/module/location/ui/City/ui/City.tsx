import {
    faDroplet,
    faLocationArrow,
    faSun,
    faWind,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import type { FC } from 'react'
import { capitalizeEachFirstLetter, renderWeatherIcon } from '@shared/lib'
import { SwitchFavorite } from '@module/user/ui/SwitchFavorite'
import { useAppSelector } from '@shared/store'
import { selectGeo } from '@module/user/store'
import { useInitialLocation } from '@module/location/ui/City/hooks'
import { SkeletonCityLead } from '@module/location/ui/City/ui/SkeletonCityLead'
import classNames from 'classnames'
import type { BaseComponentProps } from '@shared/types'
import { HoursForecast } from '../../HoursForecast'
import { WeekForecast } from '../../WeekForecast'
import { getDayLight } from '../lib'
import { selectCurrentCity } from '../../../store'

import './City.scss'
import './Hours.scss'

type CityProps = BaseComponentProps

export const City: FC<CityProps> = memo(({ className = '' }) => {
    const currentCityWeather = useAppSelector(selectCurrentCity)
    const geo = useAppSelector(selectGeo)

    const { needLoader } = useInitialLocation()

    if (needLoader)
        return (
            <div style={{ display: 'flex' }}>
                <SkeletonCityLead />
            </div>
        )

    if (!currentCityWeather) {
        return null
    }

    const {
        location,
        temperature,
        temperatureMin,
        temperatureMax,
        description = '',
        windSpeed,
        humidity,
        sunrise,
        sunset,
        iconId,
        country,
    } = currentCityWeather

    const showIconLocation = geo && Boolean(currentCityWeather)

    return (
        <section className={classNames('city', className)}>
            <div className="city__lead">
                <div className="city__main">
                    <div className="city__flex-wrapper">
                        <SwitchFavorite />
                        <h3 className="city__name">
                            {location}
                            {showIconLocation && (
                                <FontAwesomeIcon
                                    className="city__icon city__icon_type_navi"
                                    icon={faLocationArrow}
                                />
                            )}
                        </h3>
                        {country === 'RU' ? (
                            <i className="city__icon city__icon_type_flag">🇷🇺</i>
                        ) : null}
                    </div>
                    <p className="city__temp">{Math.floor(temperature)}&#176;</p>
                </div>
                <div className="city__peripheral">
                    <div className="city__description">
                        {renderWeatherIcon(iconId)}
                        <p className="city__text">
                            {capitalizeEachFirstLetter(description)}
                        </p>
                    </div>
                    <div className="city__temperatures">
                        <p className="city__temp-max">
                            H:{Math.floor(temperatureMax)}&#176;
                        </p>
                        <p className="city__temp-min">
                            L:{Math.floor(temperatureMin)}&#176;
                        </p>
                    </div>
                    <ul className="city__additional">
                        <li className="city__wind city__flex-wrapper">
                            <FontAwesomeIcon icon={faWind} />
                            <p className="city__unit city__unit_type_wind">
                                {windSpeed} km/h
                            </p>
                        </li>
                        <li className="city__humidity city__flex-wrapper">
                            <FontAwesomeIcon icon={faDroplet} />
                            <p className="city__unit city__unit_type_humidity">
                                {humidity} %
                            </p>
                        </li>
                        <li className="city__light-day city__flex-wrapper">
                            <FontAwesomeIcon icon={faSun} />
                            <p className="city__unit city__unit_type_day-light">
                                ~ {getDayLight(sunrise, sunset)}h
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="city__hours">
                <HoursForecast hours={currentCityWeather?.hourlyForecast} />
            </div>
            <div className="city__week">
                <WeekForecast list={currentCityWeather?.weekForecast} />
            </div>
        </section>
    )
})
