import { useEffect } from 'react'
import { setUserTheme } from '@module/theme/model/themeSlice'
import { useAppDispatch } from '@shared/model'
import { AppTheme } from '@shared/types'
import { userGeoConfirm } from '@module/user/models'

export const useSystemTheme = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const windowThemeChangeHandler = (evt: MediaQueryListEvent) => {
            if (evt.matches) {
                dispatch(setUserTheme(AppTheme.Dark))
            } else {
                dispatch(setUserTheme(AppTheme.Light))
            }
        }

        dispatch(userGeoConfirm())

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', windowThemeChangeHandler)

        return () =>
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', windowThemeChangeHandler)
    }, [dispatch])
}
