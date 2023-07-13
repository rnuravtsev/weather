import React, { memo } from 'react'
import type { FC } from 'react'
import { selectFavorites, setCurrentCity } from '../../ducks/slices/userSlice'
import { useAppDispatch, useAppSelector } from '../../ducks/hooks/redux'
import { capitalizeEachFirstLetter } from '../../shared/utils'
import type { IFavoriteItem } from '../../shared/types'

interface FavoriteItemProps {
    item: IFavoriteItem
}

const FavoriteItem: FC<FavoriteItemProps> = memo(({ item }) => {
    const { name, description, temperature, temperatureMin, temperatureMax } = item

    const dispatch = useAppDispatch()
    const favorites = useAppSelector(selectFavorites)

    const currentFavorite = favorites?.find((favorite) => favorite.name === name)

    const onItemClick = () => {
        dispatch(setCurrentCity(currentFavorite))
    }
    return (
        <li key={name} className="favs__item" title={name}>
            <button className="btn favs__btn" onClick={onItemClick} type="button">
                <p className="favs__name">{name}</p>
                <p className="favs__description">{capitalizeEachFirstLetter(description)}</p>
                <p className="favs__temperature">{Math.ceil(temperature)}°</p>
                <div className="favs__temperature-details">
                    <p className="favs__temperature-max">H: {Math.ceil(temperatureMax)}°</p>
                    <p className="favs__temperature-min">L: {Math.ceil(temperatureMin)}°</p>
                </div>
            </button>
        </li>
    )
})

export default FavoriteItem
