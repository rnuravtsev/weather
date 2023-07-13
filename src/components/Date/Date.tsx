import React from 'react'
import { getTodayDate } from '../City/utils'

import './Date.scss'

export const Date = () => (
    <section className="date">
        <h2 className="date__title">Date</h2>
        <p className="date__day">{getTodayDate()}</p>
    </section>
)
