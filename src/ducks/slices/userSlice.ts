import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
    isGeoConfirm: boolean,
    geo: {
        longitude?: number
        latitude?: number
    }
}

const initialState: IUserState = {
    isGeoConfirm: false,
    geo: {
        longitude: undefined,
        latitude: undefined
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserGeoPosition(state, action) {
            state.geo = action.payload
        },
        setUserGeoConfirm(state) {
            state.isGeoConfirm = true
        }
    },
    extraReducers: {}
});

export const { setUserGeoPosition, setUserGeoConfirm } = userSlice.actions

export default userSlice.reducer
