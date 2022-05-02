import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faSun, faCloudSun, faCloudRain, faSnowflake } from "@fortawesome/free-solid-svg-icons";
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