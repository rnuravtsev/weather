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
            icon_id: data?.weather[0].id
        }
    }
    return (
        <section className="city__week week">
            <h2 className="week__title">Week forecast</h2>
            <table className="week__table">
                {
                    list?.map((el, i) => (
                        <CityWeekDayForecast forecast={mapOneDayForecast(el)} key={i}/>
                    ))
                }
            </table>
        </section>
    );
};

export default WeekForecast;
