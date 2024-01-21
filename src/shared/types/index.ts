export type BaseComponentProps = {
    className?: string
}

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

type Coordinates = {
    lat: number
    lon: number
}

export type Location = {
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
