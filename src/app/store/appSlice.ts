import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@app/store/store'
import { AppStatus } from '@shared/types'

type AppState = {
    status: AppStatus
    mode: 'default' | 'fullFocus'
}

const initialState: AppState = {
    status: AppStatus.Pending,
    mode: 'default',
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setStatus(state, { payload }) {
            state.status = payload
        },
        setMode(state, { payload }: PayloadAction<'default' | 'fullFocus'>) {
            state.mode = payload
        },
    },
})

export const { setStatus, setMode } = appSlice.actions

export const selectAppStatus = (state: RootState) => state.appReducer.status
export const selectAppMode = (state: RootState) => state.appReducer.mode

export default appSlice.reducer
