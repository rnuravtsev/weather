import React, { useEffect, useState } from 'react';
import Search from "./Search";
import { useAppDispatch } from "../../hooks/redux";
import { setSearchingPlace } from "../../ducks/slices/userSlice";

const SearchContainer = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();

    useEffect(() => {
           dispatch(setSearchingPlace(inputValue))
    }, [inputValue])

    const onChangeSearch = (value: string) => setInputValue(value)

    return (
        <Search handleSearch={onChangeSearch}/>
    );
};

export default SearchContainer;
