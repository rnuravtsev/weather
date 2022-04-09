import React from 'react';
import { weatherAPI } from "../services/weatherService";
import { APIkey } from "../consts";

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
                        : <pre>{JSON.stringify(weather)}</pre>
            }
        </>
    );
};

export default WeatherContainer;
