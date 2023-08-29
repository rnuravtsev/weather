import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { getPersistConfig } from 'redux-deep-persist'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { baseApi } from '@shared/api/base'
import userReducer from '@module/user/models/userSlice'
import locationReducer from '@module/location/model/locationSlice'
import themeReducer from '@module/theme/model/themeSlice'
import { rtkQueryErrorHandler } from './middlewares'

const rootReducer = combineReducers({
    userReducer,
    locationReducer,
    themeReducer,
    [baseApi.reducerPath]: baseApi.reducer,
})

const rootPersistConfig = getPersistConfig({
    key: 'root',
    storage,
    whitelist: ['userReducer.favorites'],
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
        }).concat(baseApi.middleware, rtkQueryErrorHandler),
})

const appStoreType = () => store

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof appStoreType>
export type AppDispatch = AppStore['dispatch']

export default store
