import type { ForecastOneDayDto, HourForecastDto } from '../api/model'

interface Coordinates {
    lat: number
    lon: number
}

export const enum Status {
    Error = 'error',
    Warning = 'warning',
    Success = 'success',
}

export interface IWeather {
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

export interface IHourForecast {
    hour?: number
    weatherIcon?: number
    temperature?: number
    iconId?: number
}

export interface IForecastOneDay {
    weekDay?: number
    temperatureMax?: number
    temperatureMin?: number
    iconId?: number
}

export interface IForecast {
    hourlyForecast?: HourForecastDto[]
    weekForecast?: ForecastOneDayDto[]
}

export const enum WeatherForecast {
    Storm = 'Storm',
    Thunderstorm = 'Thunderstorm',
}

export const enum AppTheme {
    Light = 'light',
    Dark = 'dark',
}
