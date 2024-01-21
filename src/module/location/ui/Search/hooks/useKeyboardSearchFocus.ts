import type { MutableRefObject } from 'react'
import { useEffect } from 'react'
import hotkeys from 'hotkeys-js'

export const useKeyboardSearchFocus = (inputRef: MutableRefObject<HTMLInputElement>) => {
    useEffect(() => {
        hotkeys('cmd + k, ctrl + k', () => inputRef.current.focus())

        return () => hotkeys.unbind('cmd + k, ctrl + k')
    })

    const getOperatingSystem = () => {
        const { userAgent } = navigator

        if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
            return 'MacOS'
        }

        return undefined
    }

    const userOperatingSystem = getOperatingSystem()

    const keyName = userOperatingSystem === 'MacOS' ? '⌘' : 'Ctrl'

    return {
        keyName,
    }
}
