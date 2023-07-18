import { createSelector, createSlice } from '@reduxjs/toolkit'
import isEmpty from 'lodash/isEmpty'
import type { IWeather } from '../../shared/model/types'
import type { RootState } from '../store'

interface IUserState {
    isGeoConfirm: boolean
    geo?: {
        longitude: number
        latitude: number
    }
    favorites?: IWeather[]
}

const initialState: IUserState = {
    isGeoConfirm: false,
    geo: undefined,
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

export const { setGeoPosition, setFavItem, removeFavItem } = userSlice.actions

export const selectFavoriteCities = (state: RootState) => state.userReducer.favorites
export const selectFirstFavoriteCity = createSelector(
    selectFavoriteCities,
    (favorites) => favorites?.[0],
)
export const selectGeoConfirm = (state: RootState) => !isEmpty(state.userReducer.geo)
export const selectGeo = (state: RootState) => state.userReducer.geo

export default userSlice.reducer
