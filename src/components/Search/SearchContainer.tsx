import React, { useCallback, useEffect, useState } from 'react'
import { setCurrentCity } from '../../ducks/slices/app.slice'
import { useAppDispatch } from '../../ducks/hooks/redux'
import { useFetchSearchingPlaceWeatherQuery } from '../../api/weather.api'
import { Search } from './Search'

export const SearchContainer = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useAppDispatch()

    const { data: searchPlaceWeatherData, isLoading } =
        useFetchSearchingPlaceWeatherQuery({ place: inputValue }, { skip: !inputValue })

    useEffect(() => {
        if (inputValue) {
            dispatch(setCurrentCity(searchPlaceWeatherData))
        }
    }, [searchPlaceWeatherData, inputValue, dispatch])

    const handleSearchChange = useCallback((value: string) => setInputValue(value), [])

    return <Search isLoading={isLoading} onChange={handleSearchChange} />
}
