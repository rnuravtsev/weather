import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { setGeoPosition } from './userSlice'

const onNavGeoSuccess = (
    pos: GeolocationPosition,
    dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
) => {
    dispatch(
        setGeoPosition({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
        }),
    )
}

const onNavGeoError = (err: GeolocationPositionError) => {
    // eslint-disable-next-line no-console
    console.warn(`WARN: (${err.code}) — ${err.message}`)
}

export const userGeoConfirm = createAsyncThunk('user/geoConfirm', (_, { dispatch }) =>
    navigator.geolocation.getCurrentPosition(
        (evt) => onNavGeoSuccess(evt, dispatch),
        onNavGeoError,
        {
            enableHighAccuracy: true,
        },
    ),
)
