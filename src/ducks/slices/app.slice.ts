import { createSlice } from '@reduxjs/toolkit'
import type { IWeather } from '../../shared/model/types'
import { AppTheme } from '../../shared/model/types'
import type { RootState } from '../store'
import { weatherApi } from '../../shared/api/weather.api'
import { userGeoConfirm } from '../actions'

interface IAppState {
    theme: AppTheme
    currentCity?: IWeather
    isAppLoading: boolean
}

const initialState: IAppState = {
    theme: AppTheme.Light,
    currentCity: undefined,
    isAppLoading: false,
}

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setUserTheme(state, action) {
            state.theme = action.payload
        },
        setCurrentCity(state, action) {
            state.currentCity = action.payload
        },
        setAppLoading(state) {
            state.isAppLoading = true
        },
        unSetAppLoading(state) {
            state.isAppLoading = false
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userGeoConfirm.pending, appSlice.caseReducers.setAppLoading)

        builder.addCase(userGeoConfirm.fulfilled, appSlice.caseReducers.unSetAppLoading)

        builder.addMatcher(
            weatherApi.endpoints?.fetchGeolocationWeather.matchFulfilled,
            (state, { payload }) => {
                state.currentCity = payload
            },
        )

        builder.addMatcher(
            weatherApi.endpoints.fetchSearchingPlaceWeather.matchPending,
            appSlice.caseReducers.setAppLoading,
        )

        builder.addMatcher(
            weatherApi.endpoints.fetchSearchingPlaceWeather.matchFulfilled,
            appSlice.caseReducers.unSetAppLoading,
        )

        builder.addMatcher(
            weatherApi.endpoints.fetchGeolocationWeather.matchPending,
            appSlice.caseReducers.setAppLoading,
        )

        builder.addMatcher(
            weatherApi.endpoints.fetchGeolocationWeather.matchPending,
            appSlice.caseReducers.unSetAppLoading,
        )
    },
})

export const { setUserTheme, setCurrentCity } = appSlice.actions

export const selectAppLoading = (state: RootState) => state.appReducer.isAppLoading
export const selectCurrentCity = (state: RootState) => state.appReducer.currentCity
export const selectUserTheme = (state: RootState) => state.appReducer.theme
export const selectWeather = (state: RootState) =>
    state.appReducer.currentCity?.description

export default appSlice.reducer
