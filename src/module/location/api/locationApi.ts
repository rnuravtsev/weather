import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { baseApi } from '@shared/api/base'

import type { ForecastDto, IWeatherAPI } from '@shared/api/model'
import type { Location } from '@shared/types'
import { API_KEY, TEMPERATURE_UNITS } from '@shared/constants'
import { mapForecastProps, mapWeatherProps } from '../lib'

interface IFetchWeatherPayload {
    latitude?: number
    longitude?: number
}

interface IFetchWeatherForSearchingPlace {
    place: string
}

export const locationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchLocation: build.query<
            Location,
            IFetchWeatherPayload | IFetchWeatherForSearchingPlace
        >({
            queryFn: async (payload, _baseQuery, _extraConfig, fetchWithBQ) => {
                let queryParams: {}

                if ('place' in payload) {
                    queryParams = {
                        q: payload.place,
                        appid: API_KEY,
                        units: TEMPERATURE_UNITS,
                    }
                } else {
                    queryParams = {
                        lat: payload?.latitude,
                        lon: payload?.longitude,
                        apikey: API_KEY,
                        units: TEMPERATURE_UNITS,
                    }
                }

                const response = await fetchWithBQ({
                    url: '/weather',
                    params: queryParams,
                })

                if (response.error) {
                    return { error: response.error as FetchBaseQueryError }
                }

                const LocationWeather = mapWeatherProps(response.data as IWeatherAPI)

                const { coordinates } = LocationWeather

                const extendedWeather = await fetchWithBQ({
                    url: '/onecall',
                    params: {
                        lat: coordinates.lat,
                        lon: coordinates.lon,
                        appid: API_KEY,
                        exclude: ['current', 'minutely'].join(','),
                        units: TEMPERATURE_UNITS,
                    },
                })

                if (extendedWeather.error) {
                    return { error: extendedWeather.error as FetchBaseQueryError }
                }

                const normalExtendedWeather = mapForecastProps(
                    extendedWeather.data as ForecastDto,
                )

                return {
                    data: {
                        ...LocationWeather,
                        ...normalExtendedWeather,
                    } as Location,
                }
            },
        }),
    }),
})

export const { useFetchLocationQuery } = locationApi
