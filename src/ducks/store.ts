import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from "./slices/userSlice"
import { weatherAPI } from "../services/weatherService";
import { rtkQueryErrorHandler } from "./middlewares";
import {getPersistConfig} from "redux-deep-persist";

const rootReducer = combineReducers({
    userReducer,
    [weatherAPI.reducerPath]: weatherAPI.reducer
})

const rootPersistConfig = getPersistConfig({
    key: 'root',
    storage,
    whitelist: [
        'userReducer.favs'
    ],
    rootReducer,
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(weatherAPI.middleware, rtkQueryErrorHandler),
})

// TODO: для настройки redux-persist с ts
const appStoreType = () => store;

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof appStoreType>
export type AppDispatch = AppStore['dispatch']

export default store
