import React, { useMemo } from 'react'
import type { FC } from 'react'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons/faStar'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons/faStar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { selectCurrentCity } from '@module/location/store'
import { useAppDispatch, useAppSelector } from '@shared/store'
import type { BaseComponentProps } from '@shared/types'
import { removeFavItem, selectFavoriteCities, setFavItem } from '../../../store'
import { useAnimateFlip } from '../hooks/useAnimateFlip'

import './SwitchFavorite.scss'

type SaveProps = BaseComponentProps

export const SwitchFavorite: FC<SaveProps> = ({ className = '' }) => {
    const currentCity = useAppSelector(selectCurrentCity)
    const favorites = useAppSelector(selectFavoriteCities)
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
        <section className={classNames('switch-favorite', className)}>
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
