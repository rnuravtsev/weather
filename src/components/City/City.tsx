import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faLocationArrow, faSun, faWind } from "@fortawesome/free-solid-svg-icons";
import { capitalizeEachFirstLetter } from "../../utils";
import './City.css'
import './Hours.css'
import { getDayLight, renderWeatherIcon } from "./utils";
import { IForecast, IWeather } from "../../types";
import SaveContainer from "../Save/SaveContainer";
import WeekForecast from "../WeekForecast/Week";
import HoursForecast from "../HoursForecast/HoursForecast";

interface ICityProps {
    weather?: IWeather,
    weekForecast?: IForecast,
    isGeoConfirm: boolean,
    searchingPlace: boolean
}

const City: FC<ICityProps> = ({ weather, isGeoConfirm, weekForecast, searchingPlace }) => {
    if (!weather) {
        return null
    }

    const {
        location,
        temperature,
        temperature_min,
        temperature_max,
        description,
        wind_speed,
        humidity,
        sunrise,
        sunset,
        icon_id
    } = weather

    const showIconLocation = isGeoConfirm && !searchingPlace

    return (
        <section className="city">
            <h2 className="city__title">Current</h2>
            <div className="city__lead">
                <div className="city__main">
                    <div className="city__flex-wrapper">
                        <SaveContainer/>
                        <h3 className="city__name">
                            {location}
                            {showIconLocation &&
                            <FontAwesomeIcon className="city__icon city__icon_type_navi"
                                             icon={faLocationArrow}/>
                            }
                        </h3>
                        {/*// TODO: Временно всегда флаг России*/}
                        <i className="city__icon city__icon_type_flag">🇷🇺</i>
                    </div>
                    <p className="city__temp">{Math.floor(temperature)}&#176;</p>
                </div>
                <div className="city__peripheral">
                    <div className="city__description">
                        {renderWeatherIcon(icon_id)}
                        <p className="city__text">{capitalizeEachFirstLetter(description)}</p>
                    </div>
                    <div className="city__temperatures">
                        <p className="city__temp-max">H:{Math.floor(temperature_max)}&#176;</p>
                        <p className="city__temp-min">L:{Math.floor(temperature_min)}&#176;</p>
                    </div>
                    <ul className="city__additional">
                        <li className="city__wind city__flex-wrapper">
                            <FontAwesomeIcon icon={faWind}/>
                            <p className="city__unit city__unit_type_wind">{wind_speed} km/h</p>
                        </li>
                        <li className="city__humidity city__flex-wrapper">
                            <FontAwesomeIcon icon={faDroplet}/>
                            <p className="city__unit city__unit_type_humidity">{humidity} %</p>
                        </li>
                        <li className="city__light-day city__flex-wrapper">
                            <FontAwesomeIcon icon={faSun}/>
                            <p className="city__unit city__unit_type_day-light">{getDayLight(sunrise, sunset)} h</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="city__hours">
                <HoursForecast hours={weekForecast?.hourlyForecast}/>
            </div>
            <div className="city__week">
                <WeekForecast list={weekForecast?.weekForecast}/>
            </div>
        </section>
    );
};

export default City;
