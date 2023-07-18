import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { BASE_WEATHER_API, CacheTags } from '../consts'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_WEATHER_API,
    }),
    tagTypes: [CacheTags.Weather],
    endpoints: () => ({}),
})
