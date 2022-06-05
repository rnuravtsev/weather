import { setUserGeoConfirm, setGeoPosition } from "./slices/userSlice";
import { AppDispatch } from "./store";
import { IFavItem } from "../types";

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

export const getFavsFromLocalStorage = () : IFavItem[] | [] => {
    let result = []
    let favValues = Object.values(localStorage);

    for (let value of favValues) {
        let parsedValue = JSON.parse(value)

        value = {
            location: parsedValue?.name,
            time: parsedValue?.dt,
            description: parsedValue?.weather[0].description,
            temperature: parsedValue?.main.temp,
            temperature_min: parsedValue?.main.temp.min,
            temperature_max: parsedValue?.main.temp.max,
        }

        result.push(value);
    }

    return result
}
