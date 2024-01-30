import { useEffect } from 'react'
import { setUserTheme } from '@module/theme/store/themeSlice'
import { AppTheme } from '@shared/types'
import { useAppDispatch } from '@shared/store'

export const useSystemTheme = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        window.matchMedia('(prefers-color-scheme: dark)').matches
            ? dispatch(setUserTheme(AppTheme.Dark))
            : dispatch(setUserTheme(AppTheme.Light))
    }, [dispatch])

    useEffect(() => {
        const windowThemeChangeHandler = (evt: MediaQueryListEvent) => {
            if (evt.matches) {
                dispatch(setUserTheme(AppTheme.Dark))
            } else {
                dispatch(setUserTheme(AppTheme.Light))
            }
        }

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', windowThemeChangeHandler)

        return () =>
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', windowThemeChangeHandler)
    }, [dispatch])
}
