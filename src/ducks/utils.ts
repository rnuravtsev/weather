import { setGeoPosition, setUserGeoConfirm } from './slices/userSlice'
import type { AppDispatch } from './store'
import type { IWeatherSearchingPlaceAPI } from '../models/IWeatherSearchingPlaceAPI'

export const onNavGeoSuccess = async (pos: GeolocationPosition, dispatch: AppDispatch) => {
    dispatch(
        setGeoPosition({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
        }),
    )
    dispatch(setUserGeoConfirm())
}

export const onNavGeoError = (err: GeolocationPositionError) => {
    // eslint-disable-next-line no-console
    console.warn(`ERROR(${err.code}): ${err.message}`)
}

export const mapFavorites = (props: IWeatherSearchingPlaceAPI) => ({
    name: props?.name,
    time: props?.dt,
    description: props?.weather[0].description,
    temperature: props?.main.temp,
    temperatureMin: props?.main.temp_min,
    temperatureMax: props?.main.temp_max,
})
