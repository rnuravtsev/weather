import { createAsyncThunk } from "@reduxjs/toolkit";
import { onNavGeoSuccess, onNavGeoError } from "./utils";
import { AppDispatch } from "./store";

export const userGeoConfirm = createAsyncThunk(
    'user/geoConfirm',
    async (dispatch: AppDispatch) => {
        await navigator.geolocation.getCurrentPosition((evt) => onNavGeoSuccess(evt, dispatch), onNavGeoError)
    }
)
