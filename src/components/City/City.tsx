import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faWind, faDroplet, faSun } from "@fortawesome/free-solid-svg-icons";
import { capitalizeFirstLetter } from "../../utils";
import './City.css'
import './Hours.css'
import CityWeekForecast from "./CityWeekForecast";
import CityHoursForecast from "./CityHoursForecast";
import { getDayLight } from "./utils";
import { IWeather, IForecast } from "../../types";

interface ICityProps {
    weather?: IWeather,
    weekForecast?: IForecast,
    isGeoConfirm: boolean,
}

const City: FC<ICityProps> = ({ weather, isGeoConfirm, weekForecast }) => {
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
        sunset
    } = weather


    return (
        <section className="city">
            <div className="city__lead">
                <div className="city__main">
                    <div className="city__flex-wrapper">
                        {/*// TODO: Временно флаг России*/}
                        <i className="city__icon city__icon_type_flag">🇷🇺</i>
                        <h2 className="city__title">
                            {location}
                            {/*// TODO: Временно значок навигации показывается всегда*/}
                            {isGeoConfirm &&
                            <FontAwesomeIcon className="city__icon city__icon_type_navi"
                                             icon={faLocationArrow}/>
                            }
                        </h2>
                    </div>
                    <p className="city__temp">{Math.floor(temperature)}&#176;</p>
                </div>
                <div className="city__peripheral">
                    <div className="city__description">
                        <i className="city__icon">-- w --</i>
                        <p className="city__text">{capitalizeFirstLetter(description)}</p>
                    </div>
                    <div className="city__temperatures">
                        <p className="city__temp-max">H:{Math.floor(temperature_max)}&#176;</p>
                        <p className="city__temp-min">L:{Math.floor(temperature_min)}&#176;</p>
                    </div>
                    <ul className="city__additional">
                        <li className="city__wind city__flex-wrapper">
                            <FontAwesomeIcon icon={faWind}/>
                            <p className="city__wind-unit">{wind_speed} km/h</p>
                        </li>
                        <li className="city__humidity city__flex-wrapper">
                            <FontAwesomeIcon icon={faDroplet}/>
                            <p className="city__wind-unit">{humidity} %</p>
                        </li>
                        <li className="city__light-day city__flex-wrapper">
                            <FontAwesomeIcon icon={faSun}/>
                            <p className="city__wind-unit">{getDayLight(sunrise, sunset)} h</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="city__hours">
                <CityHoursForecast hours={weekForecast?.hourlyForecast}/>
            </div>
            <div className="city__week">
                <CityWeekForecast list={weekForecast?.weekForecast}/>
            </div>
        </section>
    );
};

export default City;
