import type { FC } from 'react'
import React, { useState } from 'react'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons/faStar'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons/faStar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { removeFavItem, setFavItem } from '../../ducks/slices/userSlice'
import { useAppDispatch } from '../../ducks/hooks/redux'
import type { IWeatherSearchingPlaceAPI } from '../../services/models/IWeatherSearchingPlaceAPI'
import type { TFavorites } from '../../shared/types'

import './Save.scss'

interface ISaveProps {
    currentCity?: IWeatherSearchingPlaceAPI
    favorites?: TFavorites
}

const Save: FC<ISaveProps> = ({ currentCity, favorites }) => {
    const [clicked, setClicked] = useState(false)
    const dispatch = useAppDispatch()

    const isAlreadyFav = Boolean(favorites?.some((el) => el.name === currentCity?.name))

    const animate = () => {
        setClicked(true)

        setTimeout(() => setClicked(false), 300)
    }

    const onButtonClick = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        isAlreadyFav ? dispatch(removeFavItem(currentCity?.name)) : dispatch(setFavItem(currentCity))

        animate()
    }

    return (
        <section className="save">
            <button className="btn save__btn" onClick={onButtonClick} type="button">
                {isAlreadyFav ? (
                    <FontAwesomeIcon className={classNames({ 'fa-flip': clicked })} icon={faStarSolid} />
                ) : (
                    <FontAwesomeIcon className={classNames({ 'fa-flip': clicked })} icon={faStarRegular} />
                )}
            </button>
        </section>
    )
}

export default Save
