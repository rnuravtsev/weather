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

export const convertGeoForRequest = (obj?: { lat: number; lon: number }) => {
    if (obj) {
        return {
            latitude: obj.lat,
            longitude: obj.lon,
        }
    }

    return undefined
}

const enum Icons {
    Sunny = 'sunny',
    Cloudly = 'cloudly',
    Rain = 'rain',
    ChanceStorm = 'chanceStorm',
    Snow = 'snow',
}

const makeIcon = (name: Icons) => (
    <i className={`weather-icon weather-icon_type_${name}`} />
)

export const renderWeatherIcon = (id?: number) => {
    if (!id) return null
    if (id <= 232) {
        return makeIcon(Icons.ChanceStorm)
    }
    if (id >= 300 && id <= 531) {
        return makeIcon(Icons.Rain)
    }
    if (id >= 600 && id <= 622) {
        return makeIcon(Icons.Snow)
    }
    if (id === 800) {
        return makeIcon(Icons.Sunny)
    }

    return makeIcon(Icons.Cloudly)
}
