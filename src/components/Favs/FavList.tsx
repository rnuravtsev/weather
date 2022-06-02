import React, { FC } from 'react';
import FavItem from "./FavItem";
import { IFavItem } from "../../types";

interface IFavListProps {
    list?: IFavItem[],
}

const FavList: FC<IFavListProps> = ({ list }) => {
    return (
        <>
            {list && (
                <ul className="favs__list">
                    {list?.map((el, i) => {
                        return <FavItem item={el} key={`favItem-${i}`}/>
                    })}
                </ul>
            )}
        </>
    );
};

export default FavList;
