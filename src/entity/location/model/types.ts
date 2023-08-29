import type { ForecastOneDayDto, HourForecastDto } from '../../../shared/api/model'

export interface HourForecast {
    hour?: number
    weatherIcon?: number
    temperature?: number
    iconId?: number
}

export interface OneDayForecast {
    weekDay?: number
    temperatureMax?: number
    temperatureMin?: number
    iconId?: number
}

export interface ExtendedForecast {
    hourlyForecast?: HourForecastDto[]
    weekForecast?: ForecastOneDayDto[]
}
