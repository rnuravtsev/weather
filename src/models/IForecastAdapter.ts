import { IForecastOneDayAPI } from "./IForecastOneDayAPI";
import { IHourForecastAPI } from "./IHourForecastAPI";

export interface IForecastAdapter {
    hourlyForecast?: IHourForecastAPI[],
    weekForecast?: IForecastOneDayAPI[],
}
