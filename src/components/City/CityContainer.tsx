import React, { useEffect } from 'react';
import { weatherAPI } from "../../services/weatherService";
import City from "../City/City";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootState } from "../../ducks/store";
import { mapForecastProps, mapWeatherProps } from "./mapProps";
import { convertGeoForRequest } from "./utils";
import { setCurrentCity } from "../../ducks/slices/userSlice";

const CityContainer = () => {
    const isGeoConfirm = useAppSelector((state: RootState) => state.userReducer.isGeoConfirm);
    const geoPosition = useAppSelector((state: RootState) => state.userReducer.geo);
    const searchingPlace = useAppSelector((state: RootState) => state.userReducer.searchingPlace);
    const searchingPlaceGeoPosition = convertGeoForRequest(searchingPlace?.coord);

    const dispatch = useAppDispatch()

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

    useEffect(() => {
        dispatch(setCurrentCity(weather))
    }, [weather])

    const finalLoading = userGeoLoading || weekForecastLoading;
    const finalErrors = userGeoError || weekForecastError;

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
                              isGeoConfirm={isGeoConfirm}
                              searchingPlace={Boolean(searchingPlace)}
                        />
                    </>
            }
        </>
    );
};


export default CityContainer;
