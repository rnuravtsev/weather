import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@app/store/store'
import type { Location } from '@shared/types'

type UserState = {
    geo: {
        longitude: number
        latitude: number
    } | null
    favorites?: Location[]
}

const initialState: UserState = {
    geo: null,
    favorites: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setGeoPosition(state, action) {
            state.geo = action.payload
        },
        setFavItem(state, action) {
            state.favorites?.push(action.payload)
        },
        removeFavItem(state, { payload }) {
            state.favorites = state.favorites?.filter((el) => el.location !== payload)
        },
    },
})

export const selectFavoriteCities = (state: RootState) => state.userReducer.favorites
export const selectFirstFavoriteCity = (state: RootState) =>
    state.userReducer.favorites?.[0]
export const selectGeo = (state: RootState) => state.userReducer.geo

export const { setGeoPosition, setFavItem, removeFavItem } = userSlice.actions

export default userSlice.reducer
