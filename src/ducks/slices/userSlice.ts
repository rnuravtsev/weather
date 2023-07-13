import { createSlice } from '@reduxjs/toolkit'
import { AppTheme } from '../../shared/consts'
import type { IWeather, TFavorites } from '../../shared/types'
import { weatherAPI } from '../../services/weatherService'
import type { RootState } from '../store'

interface IUserState {
    theme: string
    isGeoConfirm: boolean
    geo: {
        longitude?: number
        latitude?: number
    }
    currentCity?: IWeather
    favorites?: TFavorites
}

const initialState: IUserState = {
    theme: AppTheme.Light,
    isGeoConfirm: false,
    currentCity: undefined,
    geo: {
        longitude: undefined,
        latitude: undefined,
    },
    favorites: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserTheme(state, action) {
            state.theme = action.payload
        },
        setGeoPosition(state, action) {
            state.geo = action.payload
        },
        setUserGeoConfirm(state) {
            state.isGeoConfirm = true
        },
        setFavItem(state, action) {
            state.favorites?.push(action.payload)
        },
        setCurrentCity(state, action) {
            state.currentCity = action.payload
        },
        removeFavItem(state, action) {
            state.favorites = state.favorites?.filter((el) => el.name !== action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            weatherAPI.endpoints?.fetchWeatherForPlace.matchFulfilled,
            (state, { payload }) => {
                state.currentCity = payload
            },
        )
    },
})

export const { setGeoPosition, setUserGeoConfirm, setUserTheme, setFavItem, setCurrentCity, removeFavItem } =
    userSlice.actions

export const selectCurrentCity = (state: RootState) => state.userReducer.currentCity
export const selectUserTheme = (state: RootState) => state.userReducer.theme
export const selectFavorites = (state: RootState) => state.userReducer.favorites
export const selectGeoConfirm = (state: RootState) => state.userReducer.isGeoConfirm

export const selectGeo = (state: RootState) => state.userReducer.geo

// FIXME: Проверить типы
export const selectWeather = (state: RootState) => state.userReducer.currentCity?.weather?.[0].main

export default userSlice.reducer
