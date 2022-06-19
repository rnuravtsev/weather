const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//TODO: Подумать что выводить, если day === undefined, пока так
export const getWeekDay = (day?: number): string => (day || day === 0) ? weekDays[day] : 'не удалось загрузить данные';
