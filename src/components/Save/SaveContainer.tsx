import React from 'react';
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../ducks/store";
import Save from "./Save";

const SaveContainer = () => {
    const currentCity = useAppSelector((state: RootState) => state.userReducer.currentCity)
    const favs = useAppSelector((state: RootState) => state.userReducer.favs)

    return (
        <Save favs={favs} currentCity={currentCity}/>
    );
};

export default SaveContainer;
