import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faCloudRain, faCloudSun, faSnowflake, faSun } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const renderSunIcon = () => <FontAwesomeIcon icon={faSun}/>
const renderCloudIcon = () => <FontAwesomeIcon icon={faCloud}/>
const renderSunCloudIcon = () => <FontAwesomeIcon icon={faCloudSun}/>
const renderRainIcon = () => <FontAwesomeIcon icon={faCloudRain}/>
const renderSnowIcon = () => <FontAwesomeIcon icon={faSnowflake}/>

export const weatherIcon = {
    clouds: () => renderCloudIcon(),
    sunny: () => renderSunIcon(),
    sunnyCloud: () => renderSunCloudIcon(),
    rain: () => renderRainIcon(),
    snow: () => renderSnowIcon(),
};

export const getTodayDate = () => {
    return new Date().toDateString()
}

export const getDayLight = (sunrise: number, sunset: number): number => {
    const humanSunriseTime = new Date(sunrise * 1000).getHours();
    const humanSunsetTime = new Date(sunset * 1000).getHours();
    return humanSunsetTime - humanSunriseTime;
}
