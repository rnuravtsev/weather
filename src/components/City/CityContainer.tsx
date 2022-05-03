import React from 'react';
import { weatherAPI } from "../../services/weatherService";
import City from "../City/City";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../ducks/store";
import { IWeatherAPI } from "../../models/IWeatherAPI";
import { weatherIcons } from '../../weatherIcons';
import { IWeatherAdapter } from "../../models/IWeatherAdapter";
import { IWeekForecastAPI } from "../../models/IWeekForecastAPI";
import { IWeekForecastOneDayAPI } from "../../models/IWeekForecastOneDayAPI";

const CityContainer = () => {
    const isGeoConfirm = useAppSelector((state: RootState) => state.userReducer.isGeoConfirm);
    const userGeo = useAppSelector(state => state.userReducer.geo);

    const { data: weather, error, isLoading } = weatherAPI.useFetchWeatherForPlaceQuery(userGeo, {
        skip: !isGeoConfirm
    })

    // TODO: Обработать ошибки и загрузку
    const {
        data: weekForecast,
        error: weekForecastError,
        isLoading: weekForecastLoading
    } = weatherAPI.useFetchWeekForecastQuery(userGeo, {
        skip: !isGeoConfirm
    })

    const mapWeatherProps = (data?: IWeatherAPI): IWeatherAdapter | undefined => {
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
            feels_like: Math.round(data.main.feels_like),
            humidity: data.main.humidity,
            icon_id: data.weather[0].id,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temperature: Math.round(data.main.temp),
            temperature_min: Math.round(data.main.temp_min),
            temperature_max: Math.round(data.main.temp_max),
            timezone: data.timezone / 3600,
            wind_speed: Math.round(data.wind.speed * 3.6),
            // TODO: Не получается определить тип для weather_icon
            // weather_icon: weatherIcons[data.weather[0].id].icon
        }
    }

    const mapForecastProps = (forecast?: IWeekForecastAPI): IWeekForecastOneDayAPI[] | undefined => forecast?.daily

    return (
        <>
            {
                isLoading
                    ? 'Loader'
                    : error
                    ? <p>error</p>
                    :
                    <>
                        <City weekForecast={mapForecastProps(weekForecast)} weather={mapWeatherProps(weather)}
                              isGeoConfirm={isGeoConfirm}/>
                    </>
            }
        </>
    );
};


export default CityContainer;
