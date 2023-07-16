import { useEffect, useState } from 'react'
import type { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types'

export const useAnimateFlip = (delay: number = 300) => {
    const [clicked, setClicked] = useState(false)

    let timer: TimeoutId

    useEffect(() => () => clearTimeout(timer), [])

    const animate = () => {
        setClicked(true)

        setTimeout(() => setClicked(false), delay)
    }

    return {
        animate,
        clicked,
    }
}
