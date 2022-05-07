export interface IWeatherAdapter {
    "country": string,
    "condition": number
    "description": string,
    "date": number | string,
    "feels_like": number
    "humidity": number,
    "id": number,
    "icon_id": string | number,
    "location": string,
    "sunrise": number,
    "sunset": number,
    "temperature": number,
    "temperature_min": number,
    "temperature_max": number,
    "timezone": number,
    "wind_speed": number,
    "weather_icon"?: string,
}
