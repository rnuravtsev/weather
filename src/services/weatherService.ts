import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICity } from "../models/ICity";
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
        fetchWeatherForPlace: build.query<ICity, IFetchWeatherForPlace>({
            query: ({ latitude, longitude }) => ({
                url: '/weather',
                params: {
                    lat: latitude,
                    lon: longitude,
                    apikey: APIkey,
                    units: TEMPERATURE_UNITS,
                }
            }),
            providesTags: result => ['Weather']
        }),
        // createWeather: build.mutation<ICity, ICity>({
        //     query: (weather) => ({
        //         url: '/weather',
        //         method: 'POST',
        //         body: weather
        //     }),
        //     invalidatesTags: ['Weather']
        // })
    })
})
