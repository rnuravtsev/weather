import React, { useCallback, useState } from 'react'
import { useFetchLocationQuery } from '../../../api/locationApi'
import { Search } from './Search'

export const SearchContainer = () => {
    const [inputValue, setInputValue] = useState('')

    const { isLoading } = useFetchLocationQuery(
        { place: inputValue },
        { skip: !inputValue },
    )

    const handleSearchChange = useCallback((value: string) => setInputValue(value), [])

    return <Search isLoading={isLoading} onChange={handleSearchChange} />
}
