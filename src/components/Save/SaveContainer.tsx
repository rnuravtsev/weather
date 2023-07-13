import React, { memo } from 'react'
import { useAppSelector } from '../../ducks/hooks/redux'
import { Save } from './Save'
import { selectCurrentCity, selectFavorites } from '../../ducks/slices/userSlice'

export const SaveContainer = memo(() => {
    const currentCity = useAppSelector(selectCurrentCity)
    const favorites = useAppSelector(selectFavorites)

    return <Save favorites={favorites} currentCity={currentCity} />
})
