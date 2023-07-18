import type { IHourForecast } from '../../../shared/model/types'
import type { HourForecastDto } from '../../../shared/api/model'

export const mapOneHourForecast = (
    data?: HourForecastDto,
): IHourForecast | undefined => ({
    hour: data?.dt,
    temperature: data?.temp,
    iconId: data?.weather[0].id,
})
