import { useEffect } from 'react'
import { useFetchGeolocationWeatherQuery } from '../../../shared/api/weather.api'
import { setCurrentCity } from '../../../ducks/slices/app.slice'
import { useAppDispatch, useAppSelector } from '../../../ducks/hooks/redux'
import {
    selectFirstFavoriteCity,
    selectGeo,
    selectGeoConfirm,
} from '../../../ducks/slices/user.slice'

export const useInitialWeather = () => {
    const isGeoConfirm = useAppSelector(selectGeoConfirm)
    const geoPosition = useAppSelector(selectGeo)
    const favoriteCity = useAppSelector(selectFirstFavoriteCity)
    const dispatch = useAppDispatch()

    const { data } = useFetchGeolocationWeatherQuery(geoPosition, {
        skip: !isGeoConfirm || !geoPosition,
    })

    useEffect(() => {
        if (isGeoConfirm) {
            dispatch(setCurrentCity(data))
        } else if (favoriteCity) {
            dispatch(setCurrentCity(favoriteCity))
        }
    }, [isGeoConfirm, dispatch])
}
