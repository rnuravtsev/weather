import React, { FC, useState } from 'react'
import './Save.css'
import { useAppDispatch } from "../../hooks/redux";
import { removeFavItem, setFavItem } from "../../ducks/slices/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons/faStar";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons/faStar";
import { TFavs } from "../../types";
import { IWeatherSearchingPlaceAPI } from "../../models/IWeatherSearchingPlaceAPI";
import classNames from "classnames";

interface ISaveProps {
    currentCity?: IWeatherSearchingPlaceAPI,
    favs?: TFavs
}

const Save: FC<ISaveProps> = ({ currentCity, favs }) => {
    const [clicked, setClicked] = useState(false)
    const dispatch = useAppDispatch()

    const isAlreadyFav = Boolean(favs?.some((el) => el.name === currentCity?.name))

    const onButtonClick = () => {
        !isAlreadyFav
            ? dispatch(setFavItem(currentCity))
            : dispatch(removeFavItem(currentCity?.name))

        animate()

    }

    const animate = () => {
        setClicked(true)

        setTimeout(() => setClicked(false), 300);
    }

    return (
        <section className="save">
            <button className="btn save__btn" onClick={onButtonClick}>
                {
                    isAlreadyFav
                        ? <FontAwesomeIcon className={classNames({'fa-flip': clicked})} icon={faStarSolid}/>
                        : <FontAwesomeIcon className={classNames({'fa-flip': clicked})} icon={faStarRegular}/>
                }
            </button>
        </section>
    )
}

export default Save
