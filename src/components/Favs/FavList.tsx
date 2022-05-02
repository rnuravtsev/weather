import React, { FC } from 'react';
import FavItem from "./FavItem";
import { IFavItem } from "../../types";

interface IFavListProps {
    list?: IFavItem[],
}

const FavList: FC<IFavListProps> = ({ list }) => {
    return (
        <ul className="favs__list">
            <li className="favs__item favs__item_add">+ Add Item</li>
            {list?.map((el, i) => {
                return <FavItem item={el} key={`favItem-${i}`}/>
            })}
        </ul>
    );
};

export default FavList;
