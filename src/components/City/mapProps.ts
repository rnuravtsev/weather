import { IWeatherAPI } from "../../models/IWeatherAPI";
import { IForecastAPI } from "../../models/IForecastAPI";
import { IForecast, IWeather } from "../../types";
import { IWeatherSearchingPlaceAPI } from "../../models/IWeatherSearchingPlaceAPI";


// TODO: Ждем ответа от https://stackoverflow.com/questions/72150086/typescript-the-function-accepts-two-different-objects-but-returns-one-object
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
        icon_id: data.weather[0].id,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temperature: Math.round(data.main.temp),
        temperature_min: Math.round(data.main.temp_min),
        temperature_max: Math.round(data.main.temp_max),
        wind_speed: Math.round(data.wind.speed * 3.6),
    }
}

export const mapForecastProps = (forecast?: IForecastAPI): IForecast | undefined => {
    return {
        hourlyForecast: forecast?.hourly,
        weekForecast: forecast?.daily
    };
}
