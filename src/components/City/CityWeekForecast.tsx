import React, { FC } from 'react';
import CityWeekDayForecast from "./CityWeekDayForecast";
import { IForecastOneDayAPI } from "../../models/IForecastOneDayAPI";
import { IForecastOneDayAdapter } from "../../models/IForecastOneDayAdapter";

interface ICityWeekForecastProps {
    list?: IForecastOneDayAPI[],
}

const CityWeekForecast: FC<ICityWeekForecastProps> = ({ list }) => {
    const mapOneDayForecast = (data?: IForecastOneDayAPI): IForecastOneDayAdapter | undefined => {
        return {
            weekDay: data?.dt,
            temperature_max: data?.temp.max,
            temperature_min: data?.temp.min,
            // TODO: Временно i = 0
            weather_icon: data?.weather[0].icon
        }
    }
    return (
        <ul className="city__week-days">
            {
                list?.map((el, i) => (
                    <CityWeekDayForecast forecast={mapOneDayForecast(el)} key={i}/>
                ))
            }
        </ul>
    );
};

export default CityWeekForecast;
