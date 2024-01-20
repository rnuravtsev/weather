import { AppTheme } from '@shared/types'
import { useAppDispatch } from '@shared/model'
import { setUserTheme } from '../../../model/themeSlice'

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
