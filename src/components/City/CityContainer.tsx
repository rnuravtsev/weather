import React from 'react';
import { weatherAPI } from "../../services/weatherService";
import City from "../City/City";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../ducks/store";
import { mapForecastProps, mapWeatherProps } from "./mapProps";

const CityContainer = () => {
    const isGeoConfirm = useAppSelector((state: RootState) => state.userReducer.isGeoConfirm);
    const userGeo = useAppSelector(state => state.userReducer.geo);
    const searchingPlace = useAppSelector(state => state.userReducer.searchingPlace);

    const { data: weather, error: userGeoError, isLoading: userGeoLoading } = weatherAPI.useFetchWeatherForPlaceQuery(userGeo, {
        skip: !isGeoConfirm
    })

    const {
        data: weekForecast,
        error: weekForecastError,
        isLoading: weekForecastLoading,
    } = weatherAPI.useFetchWeekForecastQuery(userGeo, {
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
                        <City weekForecast={mapForecastProps(weekForecast)} weather={mapWeatherProps(resolveWeatherForPlace())}
                              isGeoConfirm={isGeoConfirm}/>
                    </>
            }
        </>
    );
};


export default CityContainer;
