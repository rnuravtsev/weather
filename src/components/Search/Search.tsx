import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import './Search.css'
import { debounce } from "../../utils";

interface ISearchProps {
    handleSearch: (value: string) => void,
}

const Search: FC<ISearchProps> = ({ handleSearch }) => {
    const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => handleSearch(evt.target.value);
    const debouncedOnChangeInput = debounce(onChangeInput);

    return (
        <section className="search">
            <h2 className="visually-hidden">Поиск</h2>
            <div className="search__flex-wrapper">
                <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass}/>
                <input onChange={debouncedOnChangeInput}/>
            </div>
        </section>
    );
};

export default Search;
