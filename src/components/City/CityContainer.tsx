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

    // TODO: Обработать ошибки и загрузку
    const {
        data: weekForecast,
        error: weekForecastError,
        isLoading: weekForecastLoading
    } = weatherAPI.useFetchWeekForecastQuery(userGeo, {
        skip: !isGeoConfirm
    })

    // TODO: Обработать ошибки и загрузку
    const {
        data: searchPlaceWeatherData,
        isLoading: searchPlaceLoading,
        error: searchPlaceError,
    } = weatherAPI.useFetchWeatherForSearchingPlaceQuery({ place: searchingPlace }, {
        skip: !searchingPlace
    })

    const resolveWeatherForPlace = () => {
        if (searchingPlace) {
            return searchPlaceWeatherData
        }

        return weather
    }

    return (
        <>
            {
                userGeoLoading
                    ? 'Loader'
                    : userGeoError
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
