import React, { FC } from 'react';
import FavItem from "./FavItem";
import { IFavItem } from "../../types";
import './Favs.css';
import { mapFavs } from "../../ducks/utils";
import { IWeatherSearchingPlaceAPI } from "../../models/IWeatherSearchingPlaceAPI";

interface IFavsProps {
    favs?: IWeatherSearchingPlaceAPI[]
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
                        return <FavItem item={mapFavs(el)} key={`favItem-${i}`}/>
                    })}
                </ul>
            )}
        </section>
    );
};

export default Favs;
