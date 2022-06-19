import React, { FC } from 'react';
import { MAX_HOUR_CONT_FORECAST } from "../../consts";
import { IHourForecastAPI } from "../../models/IHourForecastAPI";
import { IHourForecast } from "../../types";
import HourForecast from "./HourForecast";

interface IHoursForecastProps {
    hours?: IHourForecastAPI[],
}

const HoursForecast: FC<IHoursForecastProps> = ({ hours }) => {
    const mapOneHourForecast = (data?: IHourForecastAPI): IHourForecast | undefined => {
        return {
            hour: data?.dt,
            temperature: data?.temp,
            // TODO: Временно i = 0
            weather_icon: data?.weather[0].icon
        }
    }
    return (
        <section className="city__hours hours">
            <h2 className="hours__title">Hour forecast</h2>
            <ul className="hours__forecast">
                {hours?.slice(0, MAX_HOUR_CONT_FORECAST).map((hour, i) => (
                    <HourForecast
                        key={`hour-forecast-${i}`}
                        hourForecast={mapOneHourForecast(hour)}
                    />
                ))}
            </ul>
        </section>
    );
};

export default HoursForecast;
