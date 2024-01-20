import type { FC } from 'react'
import React, { memo } from 'react'
import type { Location } from '@shared/types'
import { useAppSelector } from '@shared/model'
import { selectFavoriteCities } from '@module/user/models'
import { FavoriteItem } from './FavoriteItem'

import './Favorites.scss'

type FavoritesProps = {
    favorites?: Location[]
}

export const Favorites: FC<FavoritesProps> = memo(() => {
    const favorites = useAppSelector(selectFavoriteCities)

    if (!favorites?.length) return null

    return (
        <section className="favs">
            <h2 className="favs__title">Favorites</h2>
            <ul className="favs__list">
                {favorites.map((el) => (
                    <FavoriteItem item={el} key={`favItem-${el.id}`} />
                ))}
            </ul>
        </section>
    )
})
