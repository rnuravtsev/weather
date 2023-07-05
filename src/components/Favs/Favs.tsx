import type { FC } from 'react'
import React from 'react'
import FavItem from './FavItem'
import type { TFavorites } from '../../shared/types'
import { mapFavorites } from '../../ducks/utils'

import './Favs.scss'

interface IFavsProps {
    favs?: TFavorites
}

const Favs: FC<IFavsProps> = ({ favs }) => (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
        {!!favs?.length && (
            <section className="favs">
                <h2 className="favs__title">Favorites</h2>
                <ul className="favs__list">
                    {favs.map((el) => (
                        <FavItem item={mapFavorites(el)} key={`favItem-${el.id}`} />
                    ))}
                </ul>
            </section>
        )}
    </>
)

export default Favs
