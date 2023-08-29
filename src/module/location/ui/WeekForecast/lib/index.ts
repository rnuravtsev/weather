const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
]
export const getWeekDay = (day?: number): string =>
    day || day === 0 ? weekDays[day] : 'Не удалось загрузить данные'
