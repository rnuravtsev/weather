import type { ForecastOneDayDto, HourForecastDto } from '@shared/api/model'

export type HourForecast = {
    hour?: number
    weatherIcon?: number
    temperature?: number
    iconId?: number
}

export type OneDayForecast = {
    weekDay?: number
    temperatureMax?: number
    temperatureMin?: number
    iconId?: number
}

export type ExtendedForecast = {
    hourlyForecast?: HourForecastDto[]
    weekForecast?: ForecastOneDayDto[]
}
