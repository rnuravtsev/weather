import React, { memo } from 'react'
import { selectGeo, selectGeoConfirm } from '../../ducks/slices/user.slice'
import { selectAppLoading, selectCurrentCity } from '../../ducks/slices/app.slice'
import { useAppSelector } from '../../ducks/hooks/redux'
import { useFetchWeekForecastQuery } from '../../api/weather.api'
import { convertGeoForRequest } from '../../shared/utils'
import { City } from './City'
import { SkeletonCityLead } from './SkeletonCityLead'
import { useInitialWeather } from './hooks'

export const CityContainer = memo(() => {
    const geoPosition = useAppSelector(selectGeo)
    const currentCity = useAppSelector(selectCurrentCity)
    const currentCityGeoPosition = convertGeoForRequest(currentCity?.coordinates)
    const isGeoConfirm = useAppSelector(selectGeoConfirm)
    const isAppLoading = useAppSelector(selectAppLoading)

    useInitialWeather()

    const { data: weekForecast } = useFetchWeekForecastQuery(
        currentCityGeoPosition || geoPosition,
        {
            skip: !currentCity,
        },
    )

    return (
        <>
            {isAppLoading ? (
                <SkeletonCityLead />
            ) : (
                <City
                    weekForecast={weekForecast}
                    weather={currentCity}
                    isGeoConfirm={isGeoConfirm}
                    searchingPlace={Boolean(currentCity)}
                />
            )}
        </>
    )
})
