import { userDetermineGeo } from '@module/user/store'
import { useAppDispatch } from '@shared/store'
import { useEffect } from 'react'

export const useRequestUserLocation = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userDetermineGeo())
    }, [dispatch])
}
