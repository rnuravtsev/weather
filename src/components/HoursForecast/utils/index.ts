import type { IHourForecastAPI } from '../../../api/models/IHourForecastAPI'
import type { IHourForecast } from '../../../shared/types'

export const mapOneHourForecast = (
    data?: IHourForecastAPI,
): IHourForecast | undefined => ({
    hour: data?.dt,
    temperature: data?.temp,
    iconId: data?.weather[0].id,
})
