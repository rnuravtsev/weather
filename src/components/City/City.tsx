import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { capitalizeFirstLetter } from "../../utils";
import './City.css'
import { IWeatherAdapter } from "../../models/IWeatherAdapter";
import CityWeekForecast from "./CityWeekForecast";
import { IWeekForecastOneDayAPI } from "../../models/IWeekForecastOneDayAPI";

interface ICityProps {
    weather?: IWeatherAdapter,
    weekForecast?: IWeekForecastOneDayAPI[],
    isGeoConfirm: boolean,
}

const City: FC<ICityProps> = ({ weather, isGeoConfirm, weekForecast }) => {
    if (!weather) {
        return null
    }
    const { location, temperature, temperature_min, temperature_max, description } = weather


    return (
        <section className="city">
            <div className="city__lead">
                <div className="city__main">
                    <div className="city__flex-wrapper">
                        flag
                        <h2 className="city__title">{location}</h2>
                        {isGeoConfirm &&
                        <FontAwesomeIcon icon={faLocationArrow}/>
                        }
                    </div>
                    <p className="city__temp">{Math.floor(temperature)}&#176;</p>
                </div>
                <div className="city__peripheral">
                    <div className="city__flex-wrapper">
                        <p className="city__description">{capitalizeFirstLetter(description)}</p>
                    </div>
                    <div className="city__flex-wrapper">
                        <p className="city__temp-max">H:{Math.floor(temperature_max)}&#176;</p>
                        <p className="city__temp-min">M:{Math.floor(temperature_min)}&#176;</p>
                    </div>
                </div>
            </div>
            <div className="city__day">
                День
            </div>
            <div className="city__week">
                <CityWeekForecast list={weekForecast}/>
            </div>
        </section>
    );
};

export default City;
