import React from 'react';
import { weatherAPI } from "../services/weatherService";
import { APIkey } from "../consts";
import Main from "./City/City";
import City from "./City/City";

const WeatherContainer = () => {
    const { data: weather, error, isLoading } = weatherAPI.useFetchWeatherForPlaceQuery({
        lon: 100,
        lat: 50,
        apikey: APIkey
    })
    return (
        <>
        {
            isLoading
                ? 'Loader'
                : error
                    ? <p>error</p>
                    : <City weather={weather}/>
        }
        </>
    );
};


export default WeatherContainer;
