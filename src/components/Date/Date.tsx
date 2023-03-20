import React from 'react'
import { getTodayDate } from '../City/utils'

import './Date.css'

const Date = () => (
    <section className="date">
        <h2 className="date__title">Date</h2>
        <p className="date__day">{getTodayDate()}</p>
    </section>
)

export default Date
