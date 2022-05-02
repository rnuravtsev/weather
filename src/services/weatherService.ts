import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICityAPI } from "../models/ICityAPI";
import { APIkey, BASE_WEATHER_API, TEMPERATURE_UNITS } from "../consts";

interface IFetchWeatherForPlace {
    latitude?: number,
    longitude?: number,
}

export const weatherAPI = createApi({
    reducerPath: 'weatherAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_WEATHER_API }),
    tagTypes: ['Weather'],
    endpoints: (build) => ({
        fetchWeatherForPlace: build.query<ICityAPI, IFetchWeatherForPlace>({
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
    })
})
