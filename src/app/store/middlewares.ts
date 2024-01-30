import { isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import type { Middleware } from '@reduxjs/toolkit'
import { capitalizeFirstLetter } from '@shared/lib'
import { Status } from '@shared/types'

/**
 * Промежуточное ПО для отклоненных экшнов
 */
export const citySearchErrorMiddleware: Middleware = () => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        const {
            meta: {
                arg: { originalArgs },
            },
        } = action || {}

        if ('place' in originalArgs) {
            toast(
                `${capitalizeFirstLetter(
                    `Sorry, the city "${capitalizeFirstLetter(
                        originalArgs.place,
                    )}" was not found.`,
                )}`,
                {
                    position: 'top-right',
                    autoClose: 2500,
                    type: Status.Error,
                },
            )
        }
    }

    return next(action)
}
