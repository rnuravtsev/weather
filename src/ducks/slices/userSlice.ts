import { createSlice } from "@reduxjs/toolkit";
import { IWeatherSearchingPlaceAPI } from "../../models/IWeatherSearchingPlaceAPI";
import { TFavs } from "../../types";

interface IUserState {
    theme: string,
    isGeoConfirm: boolean,
    geo: {
        longitude?: number
        latitude?: number
    },
    currentCity: IWeatherSearchingPlaceAPI,
    searchingPlace?: IWeatherSearchingPlaceAPI,
    favs?: TFavs
}

const initialState: IUserState = {
    theme: 'light',
    isGeoConfirm: false,
    currentCity: {} as IWeatherSearchingPlaceAPI,
    geo: {
        longitude: undefined,
        latitude: undefined
    },
    searchingPlace: undefined,
    favs: []
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
        setSearchingPlace(state, action) {
            state.searchingPlace = action.payload
        },
        setFavItem(state, action) {
            state.favs?.push(action.payload)
        },
        setCurrentCity(state, action) {
            state.currentCity = action.payload
        }
    },
    extraReducers: {}
});

export const {
    setGeoPosition,
    setUserGeoConfirm,
    setSearchingPlace,
    setUserTheme,
    setFavItem,
    setCurrentCity
} = userSlice.actions

export default userSlice.reducer
