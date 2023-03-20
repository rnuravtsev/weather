import { faDroplet, faLocationArrow, faSun, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import type { FC } from 'react'
import { capitalizeEachFirstLetter } from '../../utils'
import HoursForecast from '../HoursForecast/HoursForecast'
import SaveContainer from '../Save/SaveContainer'
import WeekForecast from '../WeekForecast/Week'
import { getDayLight, renderWeatherIcon } from './utils'
import type { IForecast, IWeather } from '../../types'

import './City.css'
import './Hours.css'

interface ICityProps {
    weather?: IWeather
    weekForecast?: IForecast
    isGeoConfirm: boolean
    searchingPlace: boolean
}

const City: FC<ICityProps> = ({ weather, isGeoConfirm, weekForecast, searchingPlace }) => {
    if (!weather) {
        return null
    }

    const {
        location,
        temperature,
        temperatureMin,
        temperatureMax,
        description,
        windSpeed,
        humidity,
        sunrise,
        sunset,
        iconId,
        country,
    } = weather

    const showIconLocation = isGeoConfirm && !searchingPlace

    return (
        <section className="city">
            <h2 className="city__title">Current</h2>
            <div className="city__lead">
                <div className="city__main">
                    <div className="city__flex-wrapper">
                        <SaveContainer />
                        <h3 className="city__name">
                            {location}
                            {showIconLocation && (
                                <FontAwesomeIcon
                                    className="city__icon city__icon_type_navi"
                                    icon={faLocationArrow}
                                />
                            )}
                        </h3>
                        {country === 'RU' ? <i className="city__icon city__icon_type_flag">🇷🇺</i> : null}
                    </div>
                    <p className="city__temp">{Math.floor(temperature)}&#176;</p>
                </div>
                <div className="city__peripheral">
                    <div className="city__description">
                        {renderWeatherIcon(iconId)}
                        <p className="city__text">{capitalizeEachFirstLetter(description)}</p>
                    </div>
                    <div className="city__temperatures">
                        <p className="city__temp-max">H:{Math.floor(temperatureMax)}&#176;</p>
                        <p className="city__temp-min">L:{Math.floor(temperatureMin)}&#176;</p>
                    </div>
                    <ul className="city__additional">
                        <li className="city__wind city__flex-wrapper">
                            <FontAwesomeIcon icon={faWind} />
                            <p className="city__unit city__unit_type_wind">{windSpeed} km/h</p>
                        </li>
                        <li className="city__humidity city__flex-wrapper">
                            <FontAwesomeIcon icon={faDroplet} />
                            <p className="city__unit city__unit_type_humidity">{humidity} %</p>
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
                <HoursForecast hours={weekForecast?.hourlyForecast} />
            </div>
            <div className="city__week">
                <WeekForecast list={weekForecast?.weekForecast} />
            </div>
        </section>
    )
}

export default City
