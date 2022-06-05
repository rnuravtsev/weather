import React, { FC } from 'react';
import { IFavItem } from "../../types";

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

    return (
        <li className="favs__item">
            {location}
        </li>
    );
};

export default FavItem;
