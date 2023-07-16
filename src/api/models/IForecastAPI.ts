import type { IForecastOneDayAPI } from './IForecastOneDayAPI'
import type { IHourForecastAPI } from './IHourForecastAPI'

export interface IForecastAPI {
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
    daily: IForecastOneDayAPI[]
    hourly: IHourForecastAPI[]
}
