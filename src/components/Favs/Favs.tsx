import React, { FC } from 'react';
import FavList from "./FavList";
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
            <FavList list={favs}/>
        </section>
    );
};

export default Favs;
