import React from 'react'

export const capitalizeFirstLetter = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1)

export const capitalizeEachFirstLetter = (string: string) =>
    string
        .split(' ')
        .map((el) => capitalizeFirstLetter(el))
        .join(' ')

export const debounce = <T extends unknown[]>(
    cb: (...args: T) => unknown,
    delay = 1000,
) => {
    let timeout: number | undefined
    return (...args: T) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => cb.apply(this, args), delay)
    }
}

export const convertGeoForRequest = (obj: { lat: number; lon: number } | undefined) => {
    if (obj) {
        return {
            latitude: obj.lat,
            longitude: obj.lon,
        }
    }

    return undefined
}

const SunIcon = () => <i className="weather-icon weather-icon_type_sunny" />
const CloudIcon = () => <i className="weather-icon weather-icon_type_cloudly" />
const RainIcon = () => <i className="weather-icon weather-icon_type_rain" />
const StormIcon = () => <i className="weather-icon weather-icon_type_chanceStorm" />
const SnowIcon = () => <i className="weather-icon weather-icon_type_snow" />

export const renderWeatherIcon = (id?: number) => {
    if (!id) return null
    if (id <= 232) {
        return <StormIcon />
    }
    if (id >= 300 && id <= 531) {
        return <RainIcon />
    }
    if (id >= 600 && id <= 622) {
        return <SnowIcon />
    }
    if (id === 800) {
        return <SunIcon />
    }

    return <CloudIcon />
}
