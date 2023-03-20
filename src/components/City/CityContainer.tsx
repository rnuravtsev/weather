import React, { useEffect } from 'react'
import { setCurrentCity } from '../../ducks/slices/userSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { weatherAPI } from '../../services/weatherService'
import { convertGeoForRequest } from '../../utils'
import City from './City'
import SkeletonCityLead from './SkeletonCityLead'
import { mapForecastProps, mapWeatherProps } from './mapProps'
import type { RootState } from '../../ducks/store'

const CityContainer = () => {
    const isGeoConfirm = useAppSelector((state: RootState) => state.userReducer.isGeoConfirm)
    const geoPosition = useAppSelector((state: RootState) => state.userReducer.geo)
    const currentCity = useAppSelector((state: RootState) => state.userReducer.currentCity)
    const currentCityGeoPosition = convertGeoForRequest(currentCity?.coord)
    const favs = useAppSelector((state: RootState) => state.userReducer.favs)

    const dispatch = useAppDispatch()

    const {
        data: weather,
        error: userGeoError,
        isLoading: userGeoLoading,
    } = weatherAPI.useFetchWeatherForPlaceQuery(geoPosition, {
        skip: !isGeoConfirm || !!currentCity,
    })

    const {
        data: weekForecast,
        error: weekForecastError,
        isLoading: weekForecastLoading,
    } = weatherAPI.useFetchWeekForecastQuery(currentCityGeoPosition || geoPosition, {
        skip: !currentCity,
    })

    useEffect(() => {
        if (!currentCity && favs) {
            dispatch(setCurrentCity(favs[0]))
        }
    }, [])

    useEffect(() => {
        if (weather) {
            dispatch(setCurrentCity(weather))
        }
    }, [weather])

    const finalLoading = userGeoLoading || weekForecastLoading
    const finalErrors = userGeoError || weekForecastError

    const resolveWeatherForPlace = () => {
        if (currentCity) {
            return currentCity
        }

        return weather
    }

    return (
        <>
            {finalErrors && <p>error</p>}

            {finalLoading && SkeletonCityLead}

            {!finalLoading && !finalErrors && (
                <City
                    weekForecast={mapForecastProps(weekForecast)}
                    weather={mapWeatherProps(resolveWeatherForPlace())}
                    isGeoConfirm={isGeoConfirm}
                    searchingPlace={Boolean(currentCity)}
                />
            )}
        </>
    )
}

export default CityContainer
