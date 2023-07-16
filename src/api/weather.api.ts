import { baseApi } from './base.api'
import type { IWeatherAPI } from './models/IWeatherAPI'
import type { IForecastAPI } from './models/IForecastAPI'
import type { IWeatherSearchingPlaceAPI } from './models/IWeatherSearchingPlaceAPI'
import type { IForecast, IWeather } from '../shared/types'

import { mapForecastProps, mapWeatherProps } from './utils/mapProps'
import { API_KEY, TEMPERATURE_UNITS, CacheTags } from '../shared/consts'

interface IFetchWeatherPayload {
    latitude?: number
    longitude?: number
}

interface IFetchWeatherForSearchingPlace {
    place: string
}

export const weatherApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchGeolocationWeather: build.query<IWeather, IFetchWeatherPayload>({
            query: ({ latitude, longitude }) => ({
                url: '/weather',
                params: {
                    lat: latitude,
                    lon: longitude,
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
                transformResponse: (response: IWeatherSearchingPlaceAPI) =>
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
            transformResponse: (response: IForecastAPI) => mapForecastProps(response),
            providesTags: () => [CacheTags.Weather],
        }),
    }),
})

export const {
    useFetchGeolocationWeatherQuery,
    useFetchSearchingPlaceWeatherQuery,
    useFetchWeekForecastQuery,
} = weatherApi
