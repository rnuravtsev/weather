import React, { FC } from 'react';
import CityWeekDayForecast from "./CityWeekDayForecast";
import { IWeekForecastOneDayAPI } from "../../models/IWeekForecastOneDayAPI";
import { IWeekForecastOneDayAdapter } from "../../models/IWeekForecastOneDayAdapter";

interface ICityWeekForecastProps {
    list?: IWeekForecastOneDayAPI[],
}

const CityWeekForecast: FC<ICityWeekForecastProps> = ({ list }) => {
    const mapOneDayForecast = (data?: IWeekForecastOneDayAPI): IWeekForecastOneDayAdapter | undefined => {
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
