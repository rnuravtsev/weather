import React, { FC } from 'react';
import FavItem from "./FavItem";
import { TFavs } from "../../types";
import './Favs.css';
import { mapFavs } from "../../ducks/utils";

interface IFavsProps {
    favs?: TFavs
}

const Favs: FC<IFavsProps> = ({ favs }) => {
    return (
        <>
            {!!favs?.length &&
                <section className="favs">
                <h2 className="favs__title">
                    Favorites
                </h2>
                <ul className="favs__list">
                    {favs.map((el, i) => {
                        return <FavItem item={mapFavs(el)} key={`favItem-${i}`}/>
                    })}
                </ul>
            </section>
            }
        </>
    );
};

export default Favs;
