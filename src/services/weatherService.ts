import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_KEY, BASE_WEATHER_API, TEMPERATURE_UNITS } from '../consts'
import type { IForecastAPI } from '../models/IForecastAPI'
import type { IWeatherAPI } from '../models/IWeatherAPI'
import type { IWeatherSearchingPlaceAPI } from '../models/IWeatherSearchingPlaceAPI'

interface IFetchWeatherForPlace {
    latitude?: number
    longitude?: number
}

interface IFetchWeatherForSearchingPlace {
    place: string
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
                    apikey: API_KEY,
                    units: TEMPERATURE_UNITS,
                },
            }),
            providesTags: () => ['Weather'],
        }),
        fetchWeekForecast: build.query<IForecastAPI, IFetchWeatherForPlace>({
            query: ({ latitude, longitude }) => ({
                url: '/onecall',
                params: {
                    lat: latitude,
                    lon: longitude,
                    appid: API_KEY,
                    exclude: ['current', 'minutely'].join(','),
                    units: TEMPERATURE_UNITS,
                },
            }),
            providesTags: () => ['Weather'],
        }),
        fetchWeatherForSearchingPlace: build.query<IWeatherSearchingPlaceAPI, IFetchWeatherForSearchingPlace>(
            {
                query: ({ place }) => ({
                    url: 'weather',
                    params: {
                        q: place,
                        appid: API_KEY,
                        units: TEMPERATURE_UNITS,
                    },
                }),
                providesTags: () => ['Weather'],
            },
        ),
    }),
})
