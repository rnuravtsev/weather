import React, { FC } from 'react';
import { IFavItem } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootState } from "../../ducks/store";
import { setCurrentCity } from "../../ducks/slices/userSlice";
import { capitalizeEachFirstLetter } from "../../utils";

interface FavItemProps {
    item: IFavItem
}

const FavItem: FC<FavItemProps> = ({ item }) => {
    const {
        name,
        description,
        temperature,
        temperature_min,
        temperature_max
    } = item

    const dispatch = useAppDispatch()
    const favs = useAppSelector((state: RootState) => state.userReducer.favs)

    const currentFav = favs?.find((fav) => fav.name === name)

    const onItemClick = () => {
        dispatch(setCurrentCity(currentFav))
    }
    return (
        <li
            className="favs__item"
            title={name}
            onClick={onItemClick}
        >
            <button
                className="btn favs__btn"
            >
                <p className="favs__name">{name}</p>
                <p className="favs__description">{capitalizeEachFirstLetter(description)}</p>
                <p className="favs__temperature">{Math.ceil(temperature)}°</p>
                <div className="favs__temperature-details">
                    <p className="favs__temperature-max">H: {Math.ceil(temperature_max)}°</p>
                    <p className="favs__temperature-min">L: {Math.ceil(temperature_min)}°</p>
                </div>
            </button>
        </li>
    );
};

export default FavItem;
