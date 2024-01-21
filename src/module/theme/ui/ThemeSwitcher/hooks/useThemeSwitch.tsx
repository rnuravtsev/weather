import { AppTheme } from '@shared/types'
import { setUserTheme } from '@module/theme/store/themeSlice'
import { useAppDispatch } from '@shared/store'

export const useThemeSwitch = (appTheme: AppTheme) => {
    const dispatch = useAppDispatch()

    const toggleTheme = () => {
        switch (appTheme) {
            case AppTheme.Light:
                dispatch(setUserTheme(AppTheme.Dark))
                break
            case AppTheme.Dark:
                dispatch(setUserTheme(AppTheme.Light))
                break
            default:
                dispatch(setUserTheme(AppTheme.Light))
        }
    }

    return { toggleTheme }
}
