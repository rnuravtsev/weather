import { useEffect } from 'react'
import { useAppDispatch } from '../../../ducks/hooks/redux'
import { setUserTheme } from '../../../ducks/slices/app.slice'
import { AppTheme } from '../../../shared/model/types'
import { userGeoConfirm } from '../../../ducks/actions'

export const useThemeSwitch = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const windowThemeChangeHandler = (evt: MediaQueryListEvent) => {
            if (evt.matches) {
                dispatch(setUserTheme(AppTheme.Dark))
            } else {
                dispatch(setUserTheme(AppTheme.Light))
            }
        }

        dispatch(userGeoConfirm(dispatch))

        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', windowThemeChangeHandler)

        return () =>
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', windowThemeChangeHandler)
    }, [dispatch])
}
