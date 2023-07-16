import { setGeoPosition } from './slices/user.slice'
import type { AppDispatch } from './store'

export const onNavGeoSuccess = async (
    pos: GeolocationPosition,
    dispatch: AppDispatch,
) => {
    dispatch(
        setGeoPosition({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
        }),
    )
}

export const onNavGeoError = (err: GeolocationPositionError) => {
    // eslint-disable-next-line no-console
    console.warn(`ERROR(${err.code}): ${err.message}`)
}
