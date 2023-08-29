import React, { memo } from 'react'
import { SwitchFavorite } from './SwitchFavorite'
import { useAppSelector } from '../../../../../shared/model'
import { selectCurrentCity } from '../../../../location/model'
import { selectFavoriteCities } from '../../../models'

export const SwitchFavoriteContainer = memo(() => {
    const currentCity = useAppSelector(selectCurrentCity)
    const favorites = useAppSelector(selectFavoriteCities)

    return <SwitchFavorite favorites={favorites} currentCity={currentCity} />
})
