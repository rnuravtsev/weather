import React, { useEffect, useState } from 'react';
import Search from "./Search";
import { useAppDispatch } from "../../hooks/redux";
import { setSearchingPlace } from "../../ducks/slices/userSlice";
import { weatherAPI } from "../../services/weatherService";

const SearchContainer = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();

    // TODO: Обработать ошибки и загрузку
    const {
        data: searchPlaceWeatherData,
        isLoading,
        error,
    } = weatherAPI.useFetchWeatherForSearchingPlaceQuery({ place: inputValue }, {
        skip: !inputValue
    })

    useEffect(() => {
        if (inputValue) {
            dispatch(setSearchingPlace(searchPlaceWeatherData))
        }
    })

    const handleSearchChange = (value: string) => setInputValue(value)

    return (
        <Search isLoading={isLoading} onChange={handleSearchChange}/>
    );
};

export default SearchContainer;
