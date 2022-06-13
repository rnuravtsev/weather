import React, { FC } from 'react';
import { IFavItem } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootState } from "../../ducks/store";
import { setSearchingPlace } from "../../ducks/slices/userSlice";

interface FavItemProps {
    item: IFavItem
}

const FavItem: FC<FavItemProps> = ({ item }) => {
    const {
        location,
        time,
        description,
        temperature,
        temperature_min,
        temperature_max
    } = item

    const dispatch = useAppDispatch()
    const favs = useAppSelector((state: RootState) => state.userReducer.favs)

    const currentFav = favs?.find((fav) => fav.name === location)

    const onItemClick = () => {
        dispatch(setSearchingPlace(currentFav))
    }
    return (
        <li
            onClick={onItemClick}
            className="favs__item">
            {location}
        </li>
    );
};

export default FavItem;
