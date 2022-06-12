import React from 'react'
import './Save.css'
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootState } from "../../ducks/store";
import { setFavItem } from "../../ducks/slices/userSlice";

const Save = () => {
    const place = useAppSelector((state: RootState) => state.userReducer.searchingPlace)
    const dispatch = useAppDispatch()

    const onButtonClick = () => {
        dispatch(setFavItem(place))
    }

    return (
        <section className="save">
            <button className="save__btn btn" onClick={onButtonClick} disabled={!place}>Add</button>
        </section>
    )
}

export default Save
