import type { IForecastOneDayAPI } from './models/IForecastOneDayAPI'
import type { IHourForecastAPI } from './models/IHourForecastAPI'
import type { IWeatherSearchingPlaceAPI } from './models/IWeatherSearchingPlaceAPI'

export interface IFavItem {
    name: string
    description: string
    temperature: number
    temperatureMin: number
    temperatureMax: number
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
    hourlyForecast?: IHourForecastAPI[]
    weekForecast?: IForecastOneDayAPI[]
}

export type TFavs = IWeatherSearchingPlaceAPI[]
