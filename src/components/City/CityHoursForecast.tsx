import React, { FC } from 'react';
import { MAX_HOUR_CONT_FORECAST } from "../../consts";
import CityHourForecast from "./CityHourForecast";
import { IHourForecastAPI } from "../../models/IHourForecastAPI";
import { IHourForecast } from "../../types";

interface ICityHoursForecastProps {
    hours?: IHourForecastAPI[],
}

const CityHoursForecast: FC<ICityHoursForecastProps> = ({ hours }) => {
    const mapOneHourForecast = (data?: IHourForecastAPI): IHourForecast | undefined => {
        return {
            hour: data?.dt,
            temperature: data?.temp,
            // TODO: Временно i = 0
            weather_icon: data?.weather[0].icon
        }
    }
    return (
        <div className="city__hours hours">
            <ul className="hours__forecast">
                {hours?.slice(0, MAX_HOUR_CONT_FORECAST).map((hour, i) => (
                    <CityHourForecast
                        key={`hour-forecast-${i}`}
                        hourForecast={mapOneHourForecast(hour)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CityHoursForecast;
