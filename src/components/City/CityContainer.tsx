import React from 'react';
import { weatherAPI } from "../../services/weatherService";
import City from "../City/City";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../ducks/store";
import { mapForecastProps, mapWeatherProps } from "./mapProps";
import { convertGeoForRequest } from "./utils";

const CityContainer = () => {
    const isGeoConfirm = useAppSelector((state: RootState) => state.userReducer.isGeoConfirm);
    const geoPosition = useAppSelector(state => state.userReducer.geo);
    const searchingPlace = useAppSelector(state => state.userReducer.searchingPlace);
    const searchingPlaceGeoPosition = convertGeoForRequest(searchingPlace?.coord);

    const {
        data: weather,
        error: userGeoError,
        isLoading: userGeoLoading
    } = weatherAPI.useFetchWeatherForPlaceQuery(geoPosition, {
        skip: !isGeoConfirm || !!searchingPlace
    })

    const {
        data: weekForecast,
        error: weekForecastError,
        isLoading: weekForecastLoading,
    } = weatherAPI.useFetchWeekForecastQuery((searchingPlaceGeoPosition || geoPosition), {
        skip: !isGeoConfirm,
    })

    const finalLoading = userGeoLoading || weekForecastLoading;
    const finalErrors = (userGeoError || weekForecastError);

    const resolveWeatherForPlace = () => {
        if (searchingPlace) {
            return searchingPlace
        }

        return weather
    }

    return (
        <>
            {
                finalLoading
                    ? 'Loader'
                    : finalErrors
                    ? <p>error</p>
                    :
                    <>
                        <City weekForecast={mapForecastProps(weekForecast)}
                              weather={mapWeatherProps(resolveWeatherForPlace())}
                              isGeoConfirm={isGeoConfirm}/>
                    </>
            }
        </>
    );
};


export default CityContainer;
