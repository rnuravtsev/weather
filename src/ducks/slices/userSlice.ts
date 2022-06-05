import { createSlice } from "@reduxjs/toolkit";
import { IWeatherSearchingPlaceAPI } from "../../models/IWeatherSearchingPlaceAPI";
import { IFavItem } from "../../types";
import { getFavsFromLocalStorage } from "../utils";

interface IUserState {
    theme: string,
    isGeoConfirm: boolean,
    geo: {
        longitude?: number
        latitude?: number
    },
    searchingPlace?: IWeatherSearchingPlaceAPI,
    favs?: IFavItem[]
}

const initialState: IUserState = {
    theme: 'light',
    isGeoConfirm: false,
    geo: {
        longitude: undefined,
        latitude: undefined
    },
    searchingPlace: undefined,
    favs: getFavsFromLocalStorage()
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
        }
    },
    extraReducers: {}
});

export const { setGeoPosition, setUserGeoConfirm, setSearchingPlace, setUserTheme, setFavItem } = userSlice.actions

export default userSlice.reducer
