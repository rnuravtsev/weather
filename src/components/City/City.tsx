import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { capitalizeFirstLetter } from "../../utils";
import './City.css'
import { ICityAdapter } from "../../models/ICityApp";

interface ICityProps {
    weather?: ICityAdapter,
    isGeoConfirm: boolean,
}

const City: FC<ICityProps> = ({ weather, isGeoConfirm }) => {
    if (!weather) {
        return null
    }
    const { location, temperature, temperature_min, temperature_max, description } = weather


    return (
        <section className="city">
            <h2 className="visually-hidden">Прогноз погоды для вашего города</h2>
            <div className="city__lead">
                <div className="city__flex-wrapper">
                    <h2 className="city__title">{location}</h2>
                    {isGeoConfirm &&
                    <FontAwesomeIcon icon={faLocationArrow}/>
                    }
                </div>
                <p className="city__temp">{Math.floor(temperature)}&#176;</p>
                <div className="city__flex-wrapper">
                    <p className="city__description">{capitalizeFirstLetter(description)}</p>
                </div>
                <div className="city__flex-wrapper">
                    <p className="city__temp-max">H:{Math.floor(temperature_max)}&#176;</p>
                    <p className="city__temp-min">M:{Math.floor(temperature_min)}&#176;</p>
                </div>
            </div>
        </section>
    );
};

export default City;
