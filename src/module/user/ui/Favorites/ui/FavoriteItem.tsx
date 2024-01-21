import React, { memo, useMemo } from 'react'
import type { FC } from 'react'
import { capitalizeEachFirstLetter } from '@shared/lib'
import type { BaseComponentProps, Location } from '@shared/types'
import { useAppDispatch, useAppSelector } from '@shared/store'
import { setLocation } from '@module/location/store'
import classNames from 'classnames'
import { selectFavoriteCities } from '../../../store'

type FavoriteItemProps = BaseComponentProps & {
    item: Location
}

export const FavoriteItem: FC<FavoriteItemProps> = memo(({ className = '', item }) => {
    const {
        location,
        description = '',
        temperature,
        temperatureMin,
        temperatureMax,
    } = item

    const dispatch = useAppDispatch()
    const favorites = useAppSelector(selectFavoriteCities)

    const currentFavorite = useMemo(
        () => favorites?.find((favorite) => favorite.location === location),
        [location, favorites],
    )

    const onItemClick = () => {
        dispatch(setLocation(currentFavorite))
    }

    return (
        <li
            key={location}
            className={classNames('favs__item', className)}
            title={location}
        >
            <button className="btn favs__btn" onClick={onItemClick} type="button">
                <p className="favs__name">{location}</p>
                <p className="favs__description">
                    {capitalizeEachFirstLetter(description)}
                </p>
                <p className="favs__temperature">{Math.ceil(temperature)}°</p>
                <div className="favs__temperature-details">
                    <p className="favs__temperature-max">
                        H: {Math.ceil(temperatureMax)}°
                    </p>
                    <p className="favs__temperature-min">
                        L: {Math.ceil(temperatureMin)}°
                    </p>
                </div>
            </button>
        </li>
    )
})
