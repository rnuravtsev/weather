export const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

export const capitalizeEachFirstLetter = (string: string) =>
    string
        .split(' ')
        .map((el) => capitalizeFirstLetter(el))
        .join(' ')

export const debounce = (cb: (...args: any) => any, delay = 1000) => {
    let timeout: any = null
    return (...args: any) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => cb.apply(this, args), delay)
    }
}

export const convertGeoForRequest = (obj: { lat: number; lon: number } | undefined) => {
    if (obj) {
        return {
            latitude: obj.lat,
            longitude: obj.lon,
        }
    }

    return undefined
}