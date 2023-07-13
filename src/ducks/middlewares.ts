import { isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import type { Middleware } from '@reduxjs/toolkit'
import { capitalizeFirstLetter } from '../shared/utils'
import { Status } from '../shared/types'

/**
 * Промежуточное ПО для отклоненных экшнов
 */
export const rtkQueryErrorHandler: Middleware = () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        toast(`${capitalizeFirstLetter(action.payload.data.message)}`, {
            position: 'top-right',
            autoClose: 3000,
            type: Status.Error,
        })
    }

    return next(action)
}
