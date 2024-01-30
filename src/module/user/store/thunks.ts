import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { setGeoPosition } from '@module/user/store/userSlice'
import { setStatus } from '@app/store/appSlice'
import { AppStatus } from '@shared/types'

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

    dispatch(setStatus(AppStatus.Ready))
}

const onNavGeoError = (
    err: GeolocationPositionError,
    dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
) => {
    // код ошибки 1 означает, что пользователь отклонил доступ к геопозиции,
    // поэтому лишний раз его уведомлять не будем
    if (err.code >= 2) {
        toast("We couldn't determine the location.", {
            type: 'warning',
        })
    }

    dispatch(setStatus(AppStatus.Ready))

    // eslint-disable-next-line no-console
    console.warn(`WARN: (${err.code}) — ${err.message}`)
}

export const userDetermineGeo = createAsyncThunk('user/determineGeo', (_, { dispatch }) =>
    navigator.geolocation.getCurrentPosition(
        (evt) => onNavGeoSuccess(evt, dispatch),
        (evt) => onNavGeoError(evt, dispatch),
        {
            enableHighAccuracy: true,
        },
    ),
)
