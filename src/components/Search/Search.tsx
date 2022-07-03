import React, { FC, useEffect, useRef } from 'react';
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

    const inputRef = useRef<HTMLInputElement>(null!)

    const outsideClick = (e: any) => {
        if (!(e.target === inputRef.current)) {
            inputRef.current.value = ''
        }

        console.log('YO.target', e.target);
    }

    useEffect(() => {
        window.addEventListener('click', outsideClick)

        console.log('YO.current', inputRef.current);

        return () => window.removeEventListener('click', outsideClick)
    })

    return (
        <section className="search">
            <h2 className="visually-hidden">Поиск</h2>
            <div className="search__flex-wrapper">
                <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass}/>
                <input ref={inputRef} className="search__input" placeholder="search.." onClick={outsideClick} onChange={debouncedOnChangeInput}/>
                {isLoading && <FontAwesomeIcon className="search__icon" icon={faSpinner}/>}
            </div>
        </section>
    );
};

export default Search;
