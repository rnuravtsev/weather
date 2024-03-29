import type { HourForecastDto } from '@shared/api/model'

import type { HourForecast } from '../../../store'

export const mapOneHourForecast = (data?: HourForecastDto): HourForecast | undefined => ({
    hour: data?.dt,
    temperature: data?.temp,
    iconId: data?.weather[0].id,
})
