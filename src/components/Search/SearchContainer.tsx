import React, { useEffect, useState } from 'react'
import { setCurrentCity } from '../../ducks/slices/userSlice'
import { useAppDispatch } from '../../ducks/hooks/redux'
import { weatherAPI } from '../../services/weatherService'
import Search from './Search'

const SearchContainer = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useAppDispatch()

    const { data: searchPlaceWeatherData, isLoading } = weatherAPI.useFetchWeatherForSearchingPlaceQuery(
        { place: inputValue },
        { skip: !inputValue },
    )

    useEffect(() => {
        if (inputValue) {
            dispatch(setCurrentCity(searchPlaceWeatherData))
        }
    }, [searchPlaceWeatherData, inputValue, dispatch])

    const handleSearchChange = (value: string) => setInputValue(value)

    return <Search isLoading={isLoading} onChange={handleSearchChange} />
}

export default SearchContainer
