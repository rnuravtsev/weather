import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import { weatherAPI } from "../services/weatherService";

const rootReducer = combineReducers({
    userReducer,
    [weatherAPI.reducerPath]: weatherAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(weatherAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
