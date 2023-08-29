import React, { memo } from 'react'
import { City } from './City'
import { SkeletonCityLead } from './SkeletonCityLead'
import { useInitialLocation } from '../hooks'
import { useAppSelector } from '../../../../../shared/model'
import { selectCurrentCity } from '../../../model'
import { selectGeoConfirm } from '../../../../user/models'

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
