import React from 'react'
import type { FC } from 'react'
import { setCurrentCity } from '../../ducks/slices/userSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { capitalizeEachFirstLetter } from '../../shared/utils'
import type { RootState } from '../../ducks/store'
import type { IFavoriteItem } from '../../shared/types'

interface FavItemProps {
    item: IFavoriteItem
}

const FavItem: FC<FavItemProps> = ({ item }) => {
    const { name, description, temperature, temperatureMin, temperatureMax } = item

    const dispatch = useAppDispatch()
    const favs = useAppSelector((state: RootState) => state.userReducer.favs)

    const currentFav = favs?.find((fav) => fav.name === name)

    const onItemClick = () => {
        dispatch(setCurrentCity(currentFav))
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
}

export default FavItem
