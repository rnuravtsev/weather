import { setGeoPosition, setUserGeoConfirm } from "./slices/userSlice";
import { AppDispatch } from "./store";
import { IWeatherSearchingPlaceAPI } from "../models/IWeatherSearchingPlaceAPI";

export const onNavGeoSuccess = async (pos: any, dispatch: AppDispatch) => {
    dispatch(setGeoPosition({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
        }
    ))
    dispatch(setUserGeoConfirm())
}

export const onNavGeoError = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

export const mapFavs = (props: IWeatherSearchingPlaceAPI) => {

    return {
        name: props?.name,
        time: props?.dt,
        description: props?.weather[0].description,
        temperature: props?.main.temp,
        temperature_min: props?.main.temp_min,
        temperature_max: props?.main.temp_max,
    }
}
