import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import Save from './Save'
import type { RootState } from '../../ducks/store'

const SaveContainer = () => {
    const currentCity = useAppSelector((state: RootState) => state.userReducer.currentCity)
    const favs = useAppSelector((state: RootState) => state.userReducer.favs)

    return <Save favs={favs} currentCity={currentCity} />
}

export default SaveContainer
