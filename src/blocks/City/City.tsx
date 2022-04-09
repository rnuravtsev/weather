import React, { FC } from 'react';
import { ICity } from "../../models/ICity";

interface MainProps {
    weather?: ICity,
}

const City: FC<MainProps> = ({ weather }) => {
    const { name, main } = weather || {}
    return (
        <section className="city">
            <h2 className="">{name}</h2>
            <pre>{JSON.stringify(main)}</pre>
        </section>
    );
};

export default City;
