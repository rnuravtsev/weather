import { AppDispatch } from "../store";
import { IWeather } from "../../models/IWeather";
import axios from "axios";
import { weatherSlice } from "./weatherSlice";

const lat = '0';
const lon = '0';
const APIkey = 'ed1fbb3cca80e3681ca83da0c451992d';

export const fetchWeather = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(weatherSlice.actions.weatherFetching)
        const response = await axios.get<IWeather>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`);
        dispatch(weatherSlice.actions.weatherFetchingSuccess(response.data))
    } catch (e) {
        // @ts-ignore
        dispatch(weatherSlice.actions.weatherFetchingError(e.message))
        console.error(e)
    }
}
