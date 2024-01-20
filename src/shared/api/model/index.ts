export type ForecastOneDayDto = {
    dt: number
    sunrise: number
    sunset: number
    moonrise: number
    moonset: number
    moon_phase: number
    temp: {
        day: number
        min: number
        max: number
        night: number
        eve: number
        morn: number
    }
    feels_like: {
        day: number
        night: number
        eve: number
        morn: number
    }
    pressure: number
    humidity: number
    dew_point: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string
        },
    ]
    clouds: number
    pop: number
    uvi: number
}

export type HourForecastDto = {
    dt: number
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_deg: number
    wind_gust: number
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string
        },
    ]
    pop: number
}

export type ForecastDto = {
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
    daily: ForecastOneDayDto[]
    hourly: HourForecastDto[]
}

export type IWeatherAPI = {
    coord: {
        lon: number
        lat: number
    }
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string
        },
    ]
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
    }
    visibility: number
    wind: {
        speed: number
        deg: number
        gust: number
    }
    clouds: {
        all: number
    }
    dt: number
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number
}

export type WeatherSearchingPlaceDto = {
    coord: {
        lon: number
        lat: number
    }
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string
        },
    ]
    base: string
    main: {
        temp: number
        pressure: number
        humidity: number
        temp_min: number
        temp_max: number
    }
    visibility: number
    wind: {
        speed: number
        deg: number
    }
    clouds: {
        all: number
    }
    dt: number
    sys: {
        type: number
        id: number
        message: number
        country: string
        sunrise: number
        sunset: number
    }
    id: number
    name: string
    cod: number
}
