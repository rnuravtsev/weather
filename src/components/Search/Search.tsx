import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import './Search.css'

const Search = () => {
    return (
        <section className="search">
            <h2 className="visually-hidden">Поиск</h2>
            <div className="search__flex-wrapper">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
             <input type="search" />
            </div>
        </section>
    );
};

export default Search;
