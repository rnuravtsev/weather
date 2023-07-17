import React, { memo } from 'react'
import { useAppSelector } from '../../ducks/hooks/redux'
import { SwitchFavorite } from './SwitchFavorite'
import { selectFavoriteCities } from '../../ducks/slices/user.slice'
import { selectCurrentCity } from '../../ducks/slices/app.slice'

export const SwitchFavoriteContainer = memo(() => {
    const currentCity = useAppSelector(selectCurrentCity)
    const favorites = useAppSelector(selectFavoriteCities)

    return <SwitchFavorite favorites={favorites} currentCity={currentCity} />
})
