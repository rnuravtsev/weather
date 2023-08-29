import { createSlice } from '@reduxjs/toolkit'
import { AppTheme } from '../../../shared/types'
import type { RootState } from '../../../app/store/store'

interface IThemeState {
    theme: AppTheme
}

const initialState: IThemeState = {
    theme: AppTheme.Light,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setUserTheme(state, action) {
            state.theme = action.payload
        },
    },
})

export const { setUserTheme } = themeSlice.actions

export const selectUserTheme = (state: RootState) => state.themeReducer.theme

export default themeSlice.reducer
