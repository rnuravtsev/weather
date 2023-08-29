import type {
    ForecastDto,
    IWeatherAPI,
    WeatherSearchingPlaceDto,
} from '@shared/api/model'
import type { Location } from '@shared/types'
import type { ExtendedForecast } from '../model'

export const mapWeatherProps = (
    data: IWeatherAPI | WeatherSearchingPlaceDto,
): Location => ({
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

export const mapForecastProps = (forecast: ForecastDto): ExtendedForecast => ({
    hourlyForecast: forecast.hourly,
    weekForecast: forecast.daily,
})
