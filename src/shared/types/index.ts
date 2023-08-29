export const enum WeatherType {
    Storm = 'Storm',
    Thunderstorm = 'Thunderstorm',
}

export const enum AppTheme {
    Light = 'light',
    Dark = 'dark',
}

export const enum Status {
    Success = 'success',
    Error = 'error',
    Warning = 'warning',
}

interface Coordinates {
    lat: number
    lon: number
}

export interface Location {
    country: string
    condition: number
    description: string
    date: number
    humidity: number
    id: number
    iconId: number
    location: string
    sunrise: number
    sunset: number
    temperature: number
    temperatureMin: number
    temperatureMax: number
    windSpeed: number
    coordinates: Coordinates
}
