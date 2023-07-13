import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import type { BaseQueryResult } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { BaseQueryMeta } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { API_KEY, BASE_WEATHER_API, TEMPERATURE_UNITS } from '../shared/consts'
import type { IForecastAPI } from './models/IForecastAPI'
import type { IWeatherAPI } from './models/IWeatherAPI'
import type { IWeatherSearchingPlaceAPI } from './models/IWeatherSearchingPlaceAPI'
import type { IForecast, IWeather } from '../shared/types'
import { mapForecastProps, mapWeatherProps } from './mapProps'

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
        fetchWeatherForPlace: build.query<IWeather, IFetchWeatherForPlace>({
            query: ({ latitude, longitude }) => ({
                url: '/weather',
                params: {
                    lat: latitude,
                    lon: longitude,
                    apikey: API_KEY,
                    units: TEMPERATURE_UNITS,
                },
            }),
            transformResponse: (response: IWeatherAPI): IWeather => mapWeatherProps(response),
            providesTags: () => ['Weather'],
        }),
        fetchWeekForecast: build.query<IForecast, IFetchWeatherForPlace>({
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
            transformResponse: (response: IForecastAPI) => mapForecastProps(response),
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

export const {
    useFetchWeekForecastQuery,
    useFetchWeatherForPlaceQuery,
    useFetchWeatherForSearchingPlaceQuery,
} = weatherAPI
