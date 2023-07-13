import React, { memo } from 'react'
import { useAppSelector } from '../../ducks/hooks/redux'
import Favorites from './Favorites'
import { selectFavorites } from '../../ducks/slices/userSlice'

export const FavoritesContainer = memo(() => {
    const favorites = useAppSelector(selectFavorites)

    return <Favorites favorites={favorites} />
})
