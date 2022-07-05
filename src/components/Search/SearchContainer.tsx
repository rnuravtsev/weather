import React, { useEffect, useState } from 'react';
import Search from "./Search";
import { useAppDispatch } from "../../hooks/redux";
import { setCurrentCity } from "../../ducks/slices/userSlice";
import { weatherAPI } from "../../services/weatherService";

const SearchContainer = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();

    const {
        data: searchPlaceWeatherData,
        isLoading,
    } = weatherAPI.useFetchWeatherForSearchingPlaceQuery({ place: inputValue }, {
        skip: !inputValue
    })

    useEffect(() => {
        if (inputValue) {
            dispatch(setCurrentCity(searchPlaceWeatherData))
        }
    }, [searchPlaceWeatherData])

    const handleSearchChange = (value: string) => setInputValue(value)

    return (
        <Search isLoading={isLoading} onChange={handleSearchChange}/>
    );
};

export default SearchContainer;
