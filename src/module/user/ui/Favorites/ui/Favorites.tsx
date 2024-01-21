import type { FC } from 'react'
import React, { memo } from 'react'
import type { BaseComponentProps } from '@shared/types'
import classNames from 'classnames'
import { useAppSelector } from '@shared/store'
import { selectFavoriteCities } from '../../../store'
import { FavoriteItem } from './FavoriteItem'

import './Favorites.scss'

type FavoritesProps = BaseComponentProps

export const Favorites: FC<FavoritesProps> = memo(({ className = '' }) => {
    const favorites = useAppSelector(selectFavoriteCities)

    if (!favorites?.length) return null

    return (
        <section className={classNames('favs', className)}>
            <h2 className="favs__title">Favorites</h2>
            <ul className="favs__list">
                {favorites.map((el) => (
                    <FavoriteItem item={el} key={`favItem-${el.id}`} />
                ))}
            </ul>
        </section>
    )
})
