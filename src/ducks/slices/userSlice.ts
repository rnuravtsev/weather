import { createSlice } from "@reduxjs/toolkit";
import { IWeatherSearchingPlaceAPI } from "../../models/IWeatherSearchingPlaceAPI";

interface IUserState {
    theme: string,
    isGeoConfirm: boolean,
    geo: {
        longitude?: number
        latitude?: number
    },
    searchingPlace?: IWeatherSearchingPlaceAPI,
}

const initialState: IUserState = {
    theme: 'light',
    isGeoConfirm: false,
    geo: {
        longitude: undefined,
        latitude: undefined
    },
    searchingPlace: undefined,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserTheme(state, action) {
          state.theme = action.payload
        },
        setUserGeoPosition(state, action) {
            state.geo = action.payload
        },
        setUserGeoConfirm(state) {
            state.isGeoConfirm = true
        },
        setSearchingPlace(state, action) {
            state.searchingPlace = action.payload
        }
    },
    extraReducers: {}
});

export const { setUserGeoPosition, setUserGeoConfirm, setSearchingPlace, setUserTheme } = userSlice.actions

export default userSlice.reducer
