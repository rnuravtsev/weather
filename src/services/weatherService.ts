import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IWeather } from "../models/IWeather";

interface IFetchWeatherForPlace {
    lat: number,
    lon: number,
    apikey: string
}

export const weatherAPI = createApi({
    reducerPath: 'weatherAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5' }),
    tagTypes: ['Weather'],
    endpoints: (build) => ({
        fetchWeatherForPlace: build.query<IWeather, IFetchWeatherForPlace>({
            query: ({lat, lon, apikey}) => ({
                url: '/weather',
                params: {
                    lat: lat,
                    lon: lon,
                    apikey: apikey,
                }
            }),
            providesTags: result => ['Weather']
        }),
        createWeather: build.mutation<IWeather, IWeather>({
            query: (weather) => ({
                url: '/weather',
                method: 'POST',
                body: weather
            }),
            invalidatesTags: ['Weather']
        })
    })
})
