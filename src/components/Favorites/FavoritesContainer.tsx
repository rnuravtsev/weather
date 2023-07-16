import React, { memo } from 'react'
import { useAppSelector } from '../../ducks/hooks/redux'
import { Favorites } from './Favorites'
import { selectFavoriteCities } from '../../ducks/slices/user.slice'

export const FavoritesContainer = memo(() => {
    const favorites = useAppSelector(selectFavoriteCities)

    return <Favorites favorites={favorites} />
})
