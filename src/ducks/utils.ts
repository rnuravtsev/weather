import { setUserGeoConfirm, setGeoPosition } from "./slices/userSlice";
import { AppDispatch } from "./store";

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
