import type { FC } from 'react'
import React from 'react'
import FavItem from './FavItem'
import type { TFavs } from '../../types'
import { mapFavs } from '../../ducks/utils'

import './Favs.css'

interface IFavsProps {
    favs?: TFavs
}

const Favs: FC<IFavsProps> = ({ favs }) => (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
        {!!favs?.length && (
            <section className="favs">
                <h2 className="favs__title">Favorites</h2>
                <ul className="favs__list">
                    {favs.map((el) => (
                        <FavItem item={mapFavs(el)} key={`favItem-${el.id}`} />
                    ))}
                </ul>
            </section>
        )}
    </>
)

export default Favs
