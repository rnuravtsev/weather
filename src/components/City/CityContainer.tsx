import React, { useEffect } from 'react';
import { weatherAPI } from "../../services/weatherService";
import City from "../City/City";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootState } from "../../ducks/store";
import { mapForecastProps, mapWeatherProps } from "./mapProps";
import {convertGeoForRequest} from "../../utils";
import { setCurrentCity } from "../../ducks/slices/userSlice";
import SkeletonCityLead from "./SkeletonCityLead";

const CityContainer = () => {
    const isGeoConfirm = useAppSelector((state: RootState) => state.userReducer.isGeoConfirm);
    const geoPosition = useAppSelector((state: RootState) => state.userReducer.geo);
    const currentCity = useAppSelector((state: RootState) => state.userReducer.currentCity);
    const currentCityGeoPosition = convertGeoForRequest(currentCity?.coord);
    const favs = useAppSelector((state: RootState) => state.userReducer.favs);

    const dispatch = useAppDispatch()

    const {
        data: weather,
        error: userGeoError,
        isLoading: userGeoLoading
    } = weatherAPI.useFetchWeatherForPlaceQuery(geoPosition, {
        skip: !isGeoConfirm || !!currentCity
    })

    const {
        data: weekForecast,
        error: weekForecastError,
        isLoading: weekForecastLoading,
    } = weatherAPI.useFetchWeekForecastQuery((currentCityGeoPosition || geoPosition), {
        skip: !currentCity,
    })

    useEffect(() => {
        if (!currentCity && favs) {
            dispatch(setCurrentCity(favs[0]))
        }
    }, [])

    useEffect(() => {
        if (weather) {
            dispatch(setCurrentCity(weather))
        }
    }, [weather])

    const finalLoading = userGeoLoading || weekForecastLoading;
    const finalErrors = userGeoError || weekForecastError;

    const resolveWeatherForPlace = () => {
        if (currentCity) {
            return currentCity
        }

        return weather
    }

    return (
        <>
            {
                // FIXME: Временно
                !finalLoading
                    ? <SkeletonCityLead/>
                    : finalErrors
                    ? <p>error</p>
                    :
                    <>
                        <City weekForecast={mapForecastProps(weekForecast)}
                              weather={mapWeatherProps(resolveWeatherForPlace())}
                              isGeoConfirm={isGeoConfirm}
                              searchingPlace={Boolean(currentCity)}
                        />
                    </>
            }
        </>
    );
};


export default CityContainer;
