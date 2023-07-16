import { createAsyncThunk } from '@reduxjs/toolkit'
import { onNavGeoError, onNavGeoSuccess } from './utils'
import type { AppDispatch } from './store'

export const userGeoConfirm = createAsyncThunk(
    'user/geoConfirm',
    async (dispatch: AppDispatch) => {
        await navigator.geolocation.getCurrentPosition(
            (evt) => onNavGeoSuccess(evt, dispatch),
            onNavGeoError,
        )
    },
)
