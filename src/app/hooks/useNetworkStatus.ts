import { useEffect } from 'react'
import { toast } from 'react-toastify'

export const useNetworkStatus = () => {
    useEffect(() => {
        const handleNetworkChange = () => {
            if (!navigator.onLine) {
                toast('Проверьте интернет-подключение', {
                    type: 'warning',
                })
            } else {
                toast('Интернет-подключение восстановлено', {
                    type: 'success',
                })
            }
        }

        window.addEventListener('offline', handleNetworkChange)
        window.addEventListener('online', handleNetworkChange)

        return () => {
            window.removeEventListener('offline', handleNetworkChange)
            window.removeEventListener('online', handleNetworkChange)
        }
    }, [])
}
