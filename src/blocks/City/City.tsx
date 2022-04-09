import React, { FC } from 'react';
import { ICity } from "../../models/ICity";

interface MainProps {
    weather?: ICity,
}

const City: FC<MainProps> = ({ weather }) => {
    const { name, main } = weather || {}
    return (
        <main className="main">
            <h2 className="">{name}</h2>
            <pre>{JSON.stringify(main)}</pre>
        </main>
    );
};

export default City;
