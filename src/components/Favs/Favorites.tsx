import type { FC } from 'react'
import React from 'react'
import FavoriteItem from './FavoriteItem'
import type { TFavorites } from '../../shared/types'
import { mapFavorites } from '../../ducks/utils'

import './Favorites.scss'

interface IFavoritesProps {
    favorites?: TFavorites
}

const Favorites: FC<IFavoritesProps> = ({ favorites }) => (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
        {!!favorites?.length && (
            <section className="favs">
                <h2 className="favs__title">Favorites</h2>
                <ul className="favs__list">
                    {favorites.map((el) => (
                        <FavoriteItem item={mapFavorites(el)} key={`favItem-${el.id}`} />
                    ))}
                </ul>
            </section>
        )}
    </>
)

export default Favorites
