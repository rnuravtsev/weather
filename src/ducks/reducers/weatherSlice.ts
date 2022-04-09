import { ICity } from "../../models/ICity";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchWeather } from "./ActionCreators";

interface WeatherState {
    weather?: ICity,
    isLoading: boolean,
    error: string
}

const initialState: WeatherState = {
    weather: {} as ICity,
    isLoading: false,
    error: ''
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchWeather.fulfilled.type]: (state, action: PayloadAction<ICity>) => {
            state.isLoading = false;
            state.error = '';
            state.weather = action.payload;
        },
        [fetchWeather.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchWeather.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default weatherSlice.reducer
