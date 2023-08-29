import React, { useMemo } from 'react'
import type { FC } from 'react'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons/faStar'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons/faStar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { removeFavItem, setFavItem } from '../../../models/userSlice'
import { useAnimateFlip } from '../hooks/useAnimateFlip'
import { useAppDispatch } from '../../../../../shared/model'
import type { Location } from '../../../../../shared/types'

import './SwitchFavorite.scss'

interface ISaveProps {
    currentCity?: Location
    favorites?: Location[]
}

export const SwitchFavorite: FC<ISaveProps> = ({ currentCity, favorites }) => {
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
        <section className="switch-favorite">
            <button
                className="btn switch-favorite__btn"
                onClick={onButtonClick}
                type="button"
            >
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
