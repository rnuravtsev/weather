import { IHourForecastAPI } from "./models/IHourForecastAPI";
import { IForecastOneDayAPI } from "./models/IForecastOneDayAPI";

export interface IWeatherFetch {
    latitude?: number,
    longitude?: number,
}

export interface IFavItem {
    location?: string,
    time?: string,
    description?: string,
    temperature?: number,
    temperature_min?: number,
    temperature_max?: number,
}

export interface IWeather {
    "country": string,
    "condition": number
    "description": string,
    "date": number,
    "humidity": number,
    "id": number,
    "icon_id": string | number,
    "location": string,
    "sunrise": number,
    "sunset": number,
    "temperature": number,
    "temperature_min": number,
    "temperature_max": number,
    "wind_speed": number,
    "weather_icon"?: string,
}

export interface IWeatherUserGeo extends IWeather {
    feels_like: number,
}

export interface IHourForecast {
    hour?: number,
    weather_icon?: string,
    temperature?: number
}

export interface IForecastOneDay {
    weekDay?: number,
    temperature_max?: number
    temperature_min?: number
    weather_icon?: string
}

export interface IForecast {
    hourlyForecast?: IHourForecastAPI[],
    weekForecast?: IForecastOneDayAPI[],
}
