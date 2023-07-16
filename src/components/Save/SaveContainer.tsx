import React, { memo } from 'react'
import { useAppSelector } from '../../ducks/hooks/redux'
import { Save } from './Save'
import { selectFavoriteCities } from '../../ducks/slices/user.slice'
import { selectCurrentCity } from '../../ducks/slices/app.slice'

export const SaveContainer = memo(() => {
    const currentCity = useAppSelector(selectCurrentCity)
    const favorites = useAppSelector(selectFavoriteCities)

    return <Save favorites={favorites} currentCity={currentCity} />
})
