import { useEffect, useMemo, useRef } from 'react'
import { debounce } from '@shared/lib'

export const useDebounce = <Callback extends (...params: unknown[]) => unknown>(
    callback: Callback,
    delay = 300,
) => {
    const ref = useRef<Callback>(null!)

    useEffect(() => {
        ref.current = callback
    }, [callback])

    return useMemo(() => {
        const func = () => {
            ref.current?.()
        }

        return debounce(func, delay)
    }, [delay])
}
