import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@shared/store'
import { selectFirstFavoriteCity, selectGeo, selectGeoConfirm } from '@module/user/store'
import { useFetchLocationQuery } from '../../../api/locationApi'
import { setLocation } from '../../../store'

export const useInitialLocation = () => {
    const isGeoConfirm = useAppSelector(selectGeoConfirm)
    const geoPosition = useAppSelector(selectGeo)
    const favoriteCity = useAppSelector(selectFirstFavoriteCity)
    const dispatch = useAppDispatch()

    const { data, isFetching, isLoading } = useFetchLocationQuery(geoPosition!, {
        skip: !isGeoConfirm || !geoPosition,
    })

    useEffect(() => {
        if (!isGeoConfirm && favoriteCity) {
            dispatch(setLocation(favoriteCity))
        }
    }, [isGeoConfirm, dispatch, favoriteCity, data])

    const needLoader = isFetching || isLoading

    return { needLoader }
}
