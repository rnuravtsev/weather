import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import Favs from './Favs'
import type { RootState } from '../../ducks/store'

const FavsContainer = () => {
    const favs = useAppSelector((state: RootState) => state.userReducer.favs)

    return <Favs favs={favs} />
}

export default FavsContainer
