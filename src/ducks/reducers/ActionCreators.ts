import { AppDispatch } from "../store";
import { IWeather } from "../../models/IWeather";
import axios from "axios";
import { weatherSlice } from "./weatherSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const lat = '0';
const lon = '0';
const APIkey = 'ed1fbb3cca80e3681ca83da0c451992d';

export const fetchWeather = createAsyncThunk(
    'weather/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IWeather>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить данные')
        }
    }
)
