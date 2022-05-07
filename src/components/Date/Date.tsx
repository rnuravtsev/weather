import React from 'react';
import './Date.css';
import { getTodayDate } from "../City/utils";

const Date = () => {
    return (
        <section className="date">
            <h2 className="visually-hidden">Текущая дата</h2>
            {getTodayDate()}
        </section>
    );
};

export default Date;
