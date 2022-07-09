import React from "react";

const SunIcon = () => <i className="weather-icon weather-icon_type_sunny"/>
const CloudIcon = () => <i className="weather-icon weather-icon_type_cloudly"/>
const RainIcon = () => <i className="weather-icon weather-icon_type_rain"/>
const StormIcon = () => <i className="weather-icon weather-icon_type_chanceStorm"/>
const SnowIcon = () => <i className="weather-icon weather-icon_type_snow"/>

export const renderWeatherIcon = (id: number | undefined) => {
    if (!id) return null
    if (id <= 232) {
        return StormIcon()
    } else if (id >= 300 && id <= 531) {
        return RainIcon()
    } else if (id >= 600 && id <= 622) {
        return SnowIcon()
    } else if (id === 800) {
        return SunIcon()
    }

    return CloudIcon()
};

export const getTodayDate = () => {
    return new Date().toDateString()
}

export const getDayLight = (sunrise: number, sunset: number): number => {
    return new Date((sunset - sunrise) * 1000).getUTCHours()
}
