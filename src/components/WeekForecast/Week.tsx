import React, { FC } from 'react';
import CityWeekDayForecast from "./WeekDayForecast";
import { IForecastOneDayAPI } from "../../models/IForecastOneDayAPI";
import { IForecastOneDay } from "../../types";

interface IWeekForecastProps {
    list?: IForecastOneDayAPI[],
}

const WeekForecast: FC<IWeekForecastProps> = ({ list }) => {
    const mapOneDayForecast = (data?: IForecastOneDayAPI): IForecastOneDay | undefined => {
        return {
            weekDay: data?.dt,
            temperature_max: data?.temp.max,
            temperature_min: data?.temp.min,
            // TODO: Временно i = 0
            weather_icon: data?.weather[0].icon
        }
    }
    return (
        <section className="city__week week">
            <h2 className="week__title">Week forecast</h2>
            <ul className="week__list">
                {
                    list?.map((el, i) => (
                        <CityWeekDayForecast forecast={mapOneDayForecast(el)} key={i}/>
                    ))
                }
            </ul>
        </section>
    );
};

export default WeekForecast;
