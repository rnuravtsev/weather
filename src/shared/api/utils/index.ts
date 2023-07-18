import type { IForecast, IWeather } from '../../model/types'
import type { ForecastDto, IWeatherAPI, WeatherSearchingPlaceDto } from '../model'

export const mapWeatherProps = (
    data: IWeatherAPI | WeatherSearchingPlaceDto,
): IWeather => ({
    id: data.id,
    location: data.name,
    condition: data.cod,
    country: data.sys.country,
    date: data.dt,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    iconId: data.weather[0].id,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    temperature: Math.round(data.main.temp),
    temperatureMin: Math.round(data.main.temp_min),
    temperatureMax: Math.round(data.main.temp_max),
    windSpeed: Math.round(data.wind.speed * 3.6),
    coordinates: data.coord,
})

export const mapForecastProps = (forecast: ForecastDto): IForecast => ({
    hourlyForecast: forecast.hourly,
    weekForecast: forecast.daily,
})
