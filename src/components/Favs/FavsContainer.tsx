import React from 'react';
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../ducks/store";
import Favs from "./Favs";

const FavsContainer = () => {
    const favs = useAppSelector((state: RootState) => state.userReducer.favs)

    return (
        <Favs favs={favs}/>
    );
};

export default FavsContainer;
