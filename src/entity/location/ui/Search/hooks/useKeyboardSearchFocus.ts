import type { MutableRefObject } from 'react'
import { useEffect } from 'react'

const enum KeyCodes {
    K = 'KeyK',
}

export const useKeyboardSearchFocus = (inputRef: MutableRefObject<HTMLInputElement>) => {
    useEffect(() => {
        const keyboardListener = (evt: KeyboardEvent) => {
            if (evt.ctrlKey && evt.code === KeyCodes.K) {
                inputRef.current.focus()
            }
        }

        window.addEventListener('keypress', keyboardListener)

        return () => window.removeEventListener('keypress', keyboardListener)
    })
}
