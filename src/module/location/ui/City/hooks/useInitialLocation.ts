import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@shared/store'
import { selectFirstFavoriteCity, selectGeo } from '@module/user/store'
import { useFetchLocationQuery } from '../../../api/locationApi'
import { setLocation } from '../../../store'

export const useInitialLocation = () => {
    const geo = useAppSelector(selectGeo)
    const favoriteCity = useAppSelector(selectFirstFavoriteCity)
    const dispatch = useAppDispatch()

    const { data, isFetching, isLoading } = useFetchLocationQuery(geo!, {
        skip: !geo,
    })

    useEffect(() => {
        if (!geo && favoriteCity) {
            dispatch(setLocation(favoriteCity))
        }
    }, [geo, dispatch, favoriteCity, data])

    const needLoader = isFetching || isLoading

    return { needLoader }
}
