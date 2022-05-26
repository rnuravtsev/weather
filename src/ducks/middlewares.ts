import { isRejectedWithValue, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * Промежуточное ПО для отклоненных экшнов
 */
export const rtkQueryErrorHandler: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            toast(`${action.payload.data.message} ${action.payload.data.cod}`, {
                position: "top-right",
                autoClose: 3000,
                type: 'error'
            })
        }

        return next(action)
    }
