import { useEffect, useState } from 'react'

export const useAnimateFlip = (delay: number = 300) => {
    const [clicked, setClicked] = useState(false)

    let timer: ReturnType<typeof setTimeout>

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
