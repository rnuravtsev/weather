import type { IForecastAPI } from '../../models/IForecastAPI'
import type { IWeatherAPI } from '../../models/IWeatherAPI'
import type { IWeatherSearchingPlaceAPI } from '../../models/IWeatherSearchingPlaceAPI'
import type { IForecast, IWeather } from '../../types'

export const mapWeatherProps = (data?: IWeatherAPI | IWeatherSearchingPlaceAPI): IWeather | undefined => {
    if (!data) {
        return undefined
    }

    return {
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
    }
}

export const mapForecastProps = (forecast?: IForecastAPI): IForecast | undefined => ({
    hourlyForecast: forecast?.hourly,
    weekForecast: forecast?.daily,
})
