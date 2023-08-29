import React, { memo } from 'react'
import { useAppSelector } from '@shared/model'
import { selectCurrentCity } from '@module/location/model'
import { SwitchFavorite } from './SwitchFavorite'
import { selectFavoriteCities } from '../../../models'

export const SwitchFavoriteContainer = memo(() => {
    const currentCity = useAppSelector(selectCurrentCity)
    const favorites = useAppSelector(selectFavoriteCities)

    return <SwitchFavorite favorites={favorites} currentCity={currentCity} />
})
