import { createSlice } from '@reduxjs/toolkit'
import { AppTheme } from '../../shared/consts'
import type { IWeatherSearchingPlaceAPI } from '../../models/IWeatherSearchingPlaceAPI'
import type { TFavorites } from '../../shared/types'

interface IUserState {
    theme: string
    isGeoConfirm: boolean
    geo: {
        longitude?: number
        latitude?: number
    }
    currentCity?: IWeatherSearchingPlaceAPI
    favs?: TFavorites
}

const initialState: IUserState = {
    theme: AppTheme.Light,
    isGeoConfirm: false,
    currentCity: undefined,
    geo: {
        longitude: undefined,
        latitude: undefined,
    },
    favs: [],
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
            state.favs?.push(action.payload)
        },
        setCurrentCity(state, action) {
            state.currentCity = action.payload
        },
        removeFavItem(state, action) {
            state.favs = state.favs?.filter((el) => el.name !== action.payload)
        },
    },
    extraReducers: {},
})

export const { setGeoPosition, setUserGeoConfirm, setUserTheme, setFavItem, setCurrentCity, removeFavItem } =
    userSlice.actions

export default userSlice.reducer
