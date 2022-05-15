import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeather } from "../../types";
import { IWeatherSearchingPlaceAPI } from "../../models/IWeatherSearchingPlaceAPI";

interface IUserState {
    isGeoConfirm: boolean,
    geo: {
        longitude?: number
        latitude?: number
    },
    searchingPlace?: IWeatherSearchingPlaceAPI,
}

const initialState: IUserState = {
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

export const { setUserGeoPosition, setUserGeoConfirm, setSearchingPlace } = userSlice.actions

export default userSlice.reducer
