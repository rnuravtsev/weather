import React, { memo, useEffect } from 'react'
import {
    selectCurrentCity,
    selectFavorites,
    selectGeo,
    selectGeoConfirm,
    setCurrentCity,
} from '../../ducks/slices/userSlice'
import { useAppDispatch, useAppSelector } from '../../ducks/hooks/redux'
import {
    useFetchWeatherForPlaceQuery,
    useFetchWeekForecastQuery,
} from '../../services/weatherService'
import { convertGeoForRequest } from '../../shared/utils'
import { City } from './City'
import { SkeletonCityLead } from './SkeletonCityLead'

export const CityContainer = memo(() => {
    const isGeoConfirm = useAppSelector(selectGeoConfirm)
    const geoPosition = useAppSelector(selectGeo)
    const currentCity = useAppSelector(selectCurrentCity)
    const favorites = useAppSelector(selectFavorites)
    const currentCityGeoPosition = convertGeoForRequest(currentCity?.coord)

    const dispatch = useAppDispatch()

    const {
        data: weather,
        error: userGeoError,
        isLoading: userGeoLoading,
    } = useFetchWeatherForPlaceQuery(geoPosition, {
        skip: !isGeoConfirm || !!currentCity,
    })

    const {
        data: weekForecast,
        error: weekForecastError,
        isLoading: weekForecastLoading,
    } = useFetchWeekForecastQuery(currentCityGeoPosition || geoPosition, {
        skip: !currentCity,
    })

    useEffect(() => {
        if (!currentCity && favorites) {
            dispatch(setCurrentCity(favorites[0]))
        }
    }, [currentCity, favorites, dispatch])

    const finalLoading = userGeoLoading || weekForecastLoading
    const finalErrors = userGeoError || weekForecastError

    // TODO: Понять что в какой момент рендерить, нужно разделить сущности
    // const resolveWeatherForPlace = () => {
    //     if (currentCity) {
    //         return currentCity
    //     }
    //
    //     return weather
    // }

    return (
        <>
            {finalErrors && <p>error</p>}

            {!finalLoading && <SkeletonCityLead />}

            {finalLoading && !finalErrors && (
                <City
                    weekForecast={weekForecast}
                    weather={weather}
                    isGeoConfirm={isGeoConfirm}
                    searchingPlace={Boolean(currentCity)}
                />
            )}
        </>
    )
})
