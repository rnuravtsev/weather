import React from "react";

const SunIcon = () => <i className="weather-icon weather-icon_type_sunny"/>
const CloudIcon = () => <i className="weather-icon weather-icon_type_cloudly"/>
// const PartlySunnyIcon = () => <i className="weather-icon weather-icon_type_partlySunny"/>
const RainIcon = () => <i className="weather-icon weather-icon_type_rain"/>
// const ChanceRainIcon = () => <i className="weather-icon weather-icon_type_chanceRain"/>
const StormIcon = () => <i className="weather-icon weather-icon_type_chanceStorm"/>

export const renderWeatherIcon = (id: number | undefined) => {
    if (!id) return null
    if (id <= 232) {
        return StormIcon()
    } else if (id >= 300 && id <= 531) {
        return RainIcon()
    } else if (id === 800) {
        return SunIcon()
    } else {
        return CloudIcon()
    }
};

export const getTodayDate = () => {
    return new Date().toDateString()
}

export const getDayLight = (sunrise: number, sunset: number): number => {
    return new Date((sunset - sunrise) * 1000).getUTCHours()
}
