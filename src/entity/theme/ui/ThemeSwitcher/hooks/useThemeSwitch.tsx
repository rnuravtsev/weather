import { AppTheme } from '../../../../../shared/types'
import { setUserTheme } from '../../../model/themeSlice'
import { useAppDispatch } from '../../../../../shared/model'

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

    return [toggleTheme]
}
