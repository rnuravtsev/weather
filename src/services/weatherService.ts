import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IWeatherAPI } from "../models/IWeatherAPI";
import { APIkey, BASE_WEATHER_API, TEMPERATURE_UNITS } from "../consts";
import { IWeekForecastAPI } from "../models/IWeekForecastAPI";

interface IFetchWeatherForPlace {
    latitude?: number,
    longitude?: number,
}

export const weatherAPI = createApi({
    reducerPath: 'weatherAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_WEATHER_API }),
    tagTypes: ['Weather'],
    endpoints: (build) => ({
        fetchWeatherForPlace: build.query<IWeatherAPI, IFetchWeatherForPlace>({
            query: ({ latitude, longitude }) => ({
                url: '/weather',
                params: {
                    lat: latitude,
                    lon: longitude,
                    apikey: APIkey,
                    units: TEMPERATURE_UNITS,
                }
            }),
            providesTags: () => ['Weather']
        }),
        fetchWeekForecast: build.query<IWeekForecastAPI, IFetchWeatherForPlace>({
            query: ({ latitude, longitude }) => ({
                url: '/onecall',
                params: {
                    lat: latitude,
                    lon: longitude,
                    appid: APIkey,
                    exclude: ['current', 'minutely', 'hourly', 'alerts'].join(','),
                    units: TEMPERATURE_UNITS,
                }
            }),
            providesTags: () => ['Weather']
        }),
    })
})
