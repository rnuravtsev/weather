const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
export const getWeekDay = (day?: number): string =>
    day || day === 0 ? weekDays[day] : 'не удалось загрузить данные'
