import { createSlice } from '@reduxjs/toolkit'
import type { Location } from '@shared/types'
import type { RootState } from '@app/store/store'
import { locationApi } from '../api/locationApi'

type LocationState = {
    currentCity?: Location
}

const initialState: LocationState = {
    currentCity: undefined,
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation(state, { payload }) {
            state.currentCity = payload
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            locationApi.endpoints.fetchLocation.matchFulfilled,
            locationSlice.caseReducers.setLocation,
        )
    },
})

export const { setLocation } = locationSlice.actions

export const selectCurrentCity = (state: RootState) => state.locationReducer.currentCity
export const selectWeather = (state: RootState) =>
    state.locationReducer.currentCity?.description

export default locationSlice.reducer
