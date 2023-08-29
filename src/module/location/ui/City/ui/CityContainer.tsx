import React, { memo } from 'react'
import { useAppSelector } from '@shared/model'
import { selectGeoConfirm } from '@module/user/models'
import { City } from './City'
import { SkeletonCityLead } from './SkeletonCityLead'
import { useInitialLocation } from '../hooks'
import { selectCurrentCity } from '../../../model'

export const CityContainer = memo(() => {
    const currentCity = useAppSelector(selectCurrentCity)
    const isGeoConfirm = useAppSelector(selectGeoConfirm)

    const { needLoader } = useInitialLocation()

    // TODO: Доработать загрузку приложения
    if (needLoader) return <SkeletonCityLead />

    return (
        <City
            weather={currentCity}
            isGeoConfirm={isGeoConfirm}
            searchingPlace={Boolean(currentCity)}
        />
    )
})
