import { baseApi } from './base.api'
import type { IForecast, IWeather } from '../model/types'

import { mapForecastProps, mapWeatherProps } from './utils'
import { API_KEY, TEMPERATURE_UNITS, CacheTags } from '../consts'
import type { ForecastDto, IWeatherAPI, WeatherSearchingPlaceDto } from './model'

interface IFetchWeatherPayload {
    latitude?: number
    longitude?: number
}

interface IFetchWeatherForSearchingPlace {
    place: string
}

export const weatherApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchGeolocationWeather: build.query<IWeather, IFetchWeatherPayload | undefined>({
            query: (payload) => ({
                url: '/weather',
                params: {
                    lat: payload?.latitude,
                    lon: payload?.longitude,
                    apikey: API_KEY,
                    units: TEMPERATURE_UNITS,
                },
            }),
            transformResponse: (response: IWeatherAPI): IWeather =>
                mapWeatherProps(response),
            providesTags: () => [CacheTags.Weather],
        }),
        fetchSearchingPlaceWeather: build.query<IWeather, IFetchWeatherForSearchingPlace>(
            {
                query: ({ place }) => ({
                    url: '/weather',
                    params: {
                        q: place,
                        appid: API_KEY,
                        units: TEMPERATURE_UNITS,
                    },
                }),
                transformResponse: (response: WeatherSearchingPlaceDto) =>
                    mapWeatherProps(response),
                providesTags: () => [CacheTags.Weather],
            },
        ),
        fetchWeekForecast: build.query<IForecast, IFetchWeatherPayload | undefined>({
            query: (payload) => ({
                url: '/onecall',
                params: {
                    lat: payload?.latitude,
                    lon: payload?.longitude,
                    appid: API_KEY,
                    exclude: ['current', 'minutely'].join(','),
                    units: TEMPERATURE_UNITS,
                },
            }),
            transformResponse: (response: ForecastDto) => mapForecastProps(response),
            providesTags: () => [CacheTags.Weather],
        }),
    }),
})

export const {
    useFetchGeolocationWeatherQuery,
    useFetchSearchingPlaceWeatherQuery,
    useFetchWeekForecastQuery,
} = weatherApi
