export const getDayLight = (sunrise: number, sunset: number) =>
    new Date((sunset - sunrise) * 1000).getUTCHours()
