import React, { FC } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import './Search.css'
import { debounce } from "../../utils";

interface ISearchProps {
    isLoading: boolean,
    onChange: (value: string) => void,
}

const Search: FC<ISearchProps> = ({ onChange, isLoading }) => {
    const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => onChange(evt.target.value);
    const debouncedOnChangeInput = debounce(onChangeInput);

    return (
        <section className="search">
            <h2 className="visually-hidden">Поиск</h2>
            <div className="search__flex-wrapper">
                <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass}/>
                <input className="search__input" onChange={debouncedOnChangeInput}/>
                {isLoading && <FontAwesomeIcon className="search__icon" icon={faSpinner}/>}
            </div>
        </section>
    );
};

export default Search;
