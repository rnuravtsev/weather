import React from 'react';
import './Date.css';
import { getTodayDate } from "../City/utils";

const Date = () => {
    return (
        <section className="date">
            <h2 className="date__title">Date</h2>
            <p className="date__day">{getTodayDate()}</p>
        </section>
    );
};

export default Date;
