import React, { FC } from 'react';
import { IFavItem } from "../../types";

interface FavItemProps {
    item?: IFavItem
}

const FavItem: FC<FavItemProps> = () => {
    return (
        <li className="favs__item">

        </li>
    );
};

export default FavItem;
