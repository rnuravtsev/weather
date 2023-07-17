import React, { memo, useCallback } from 'react'
import type { FC } from 'react'
import type { IWeather } from '../../shared/types'
import { selectFavoriteCities } from '../../ducks/slices/user.slice'
import { setCurrentCity } from '../../ducks/slices/app.slice'
import { useAppDispatch, useAppSelector } from '../../ducks/hooks/redux'

import { capitalizeEachFirstLetter } from '../../shared/lib'

interface FavoriteItemProps {
    item: IWeather
}

export const FavoriteItem: FC<FavoriteItemProps> = memo(({ item }) => {
    const { location, description, temperature, temperatureMin, temperatureMax } = item

    const dispatch = useAppDispatch()
    const favorites = useAppSelector(selectFavoriteCities)

    // FIXME: Добавить useMemo либо вынести в reselect
    const currentFavorite = favorites?.find((favorite) => favorite.location === location)

    const onItemClick = useCallback(() => {
        dispatch(setCurrentCity(currentFavorite))
    }, [currentFavorite, dispatch])

    return (
        <li key={location} className="favs__item" title={location}>
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
