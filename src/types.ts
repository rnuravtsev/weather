export interface IWeatherFetch {
    latitude?: number | string,
    longitude?: number | string,
}

export interface IFavItem {
    location?: string,
    time?: string,
    description?: string,
    temperature?: number,
    temperature_min?: number,
    temperature_max?: number,
}
