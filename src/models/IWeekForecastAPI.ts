import { IWeekForecastOneDayAPI } from "./IWeekForecastOneDayAPI";

export interface IWeekForecastAPI {
    "lat": number,
    "lon": number,
    "timezone": string,
    "timezone_offset": number,
    "daily": IWeekForecastOneDayAPI[],
}


