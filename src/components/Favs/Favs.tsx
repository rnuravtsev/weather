import React, { FC } from 'react';
import FavItem from "./FavItem";
import { IFavItem } from "../../types";
import './Favs.css';

interface IFavsProps {
    favs?: IFavItem[]
}

const Favs: FC<IFavsProps> = ({ favs }) => {
    return (
        <section className="favs">
            <h2 className="visually-hidden">
                Список избранных локаций
            </h2>
            {favs && (
                <ul className="favs__list">
                    {favs?.map((el, i) => {
                        return <FavItem item={el} key={`favItem-${i}`}/>
                    })}
                </ul>
            )}
        </section>
    );
};

export default Favs;
