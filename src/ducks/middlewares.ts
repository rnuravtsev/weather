import { isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import type { Middleware } from '@reduxjs/toolkit'
import { capitalizeFirstLetter } from '../utils'

/**
 * Промежуточное ПО для отклоненных экшнов
 */
export const rtkQueryErrorHandler: Middleware = () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        toast(`${capitalizeFirstLetter(action.payload.data.message)}`, {
            position: 'top-right',
            autoClose: 3000,
            type: 'error',
        })
    }

    return next(action)
}
