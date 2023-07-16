import React, { useMemo } from 'react'
import type { FC } from 'react'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons/faStar'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons/faStar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import type { IWeather } from '../../shared/types'
import { removeFavItem, setFavItem } from '../../ducks/slices/user.slice'
import { useAppDispatch } from '../../ducks/hooks/redux'
import { useAnimateFlip } from './hooks/useAnimateFlip'

import './Save.scss'

interface ISaveProps {
    currentCity?: IWeather
    favorites?: IWeather[]
}

export const Save: FC<ISaveProps> = ({ currentCity, favorites }) => {
    // TODO: Проверить работу кастомного хука
    const { animate, clicked } = useAnimateFlip()
    const dispatch = useAppDispatch()

    const isAlreadyFav = useMemo(
        () => favorites?.some((el) => el.location === currentCity?.location),
        [favorites, currentCity?.location],
    )

    const onButtonClick = () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        isAlreadyFav
            ? dispatch(removeFavItem(currentCity?.location))
            : dispatch(setFavItem(currentCity))

        animate()
    }

    return (
        <section className="save">
            <button className="btn save__btn" onClick={onButtonClick} type="button">
                {isAlreadyFav ? (
                    <FontAwesomeIcon
                        className={classNames({ 'fa-flip': clicked })}
                        icon={faStarSolid}
                    />
                ) : (
                    <FontAwesomeIcon
                        className={classNames({ 'fa-flip': clicked })}
                        icon={faStarRegular}
                    />
                )}
            </button>
        </section>
    )
}
