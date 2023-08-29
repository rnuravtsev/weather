import { createSlice } from '@reduxjs/toolkit'
import type { Location } from '../../../shared/types'
import type { RootState } from '../../../app/store/store'
import { locationApi } from '../api/locationApi'

interface ILocationState {
    location?: Location
}

const initialState: ILocationState = {
    location: undefined,
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation(state, { payload }) {
            state.location = payload
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

export const selectCurrentCity = (state: RootState) => state.locationReducer.location
export const selectWeather = (state: RootState) =>
    state.locationReducer.location?.description

export default locationSlice.reducer
