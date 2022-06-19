import { isRejectedWithValue, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { capitalizeFirstLetter } from "../utils";

/**
 * Промежуточное ПО для отклоненных экшнов
 */
export const rtkQueryErrorHandler: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            toast(`${capitalizeFirstLetter(action.payload.data.message)}`, {
                position: "top-right",
                autoClose: 3000,
                type: 'error'
            })
        }

        return next(action)
    }
