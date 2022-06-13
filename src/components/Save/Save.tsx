import React, { FC, useEffect, useState } from 'react'
import './Save.css'
import { useAppDispatch } from "../../hooks/redux";
import { setFavItem } from "../../ducks/slices/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons/faStar";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons/faStar";
import { TFavs } from "../../types";
import { IWeatherSearchingPlaceAPI } from "../../models/IWeatherSearchingPlaceAPI";

interface ISaveProps {
    currentCity?: IWeatherSearchingPlaceAPI,
    favs?: TFavs
}

const Save: FC<ISaveProps> = ({ currentCity, favs }) => {
    const [fav, setFav] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const isAlreadyFav = Boolean(favs?.some((el) => el.name === currentCity?.name))
    const isBtnDisabled = !currentCity || fav

    useEffect(() => {
        setFav(isAlreadyFav)
    }, [favs, currentCity])

    const onButtonClick = () => {
        if (!fav) {
            dispatch(setFavItem(currentCity))
            setFav(true)
        }
    }

    return (
        <section className="save">
            <button className="btn save__btn" onClick={onButtonClick} disabled={isBtnDisabled}>
                {
                    fav
                        ? <FontAwesomeIcon icon={faStarSolid}/>
                        : <FontAwesomeIcon icon={faStarRegular}/>
                }

            </button>
        </section>
    )
}

export default Save
