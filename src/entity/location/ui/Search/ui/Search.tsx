import type { FC } from 'react'
import React, { memo, useCallback, useRef, useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { debounce } from '../../../../../shared/lib'
import { useKeyboardSearchFocus } from '../hooks/useKeyboardSearchFocus'

import './Search.scss'

interface ISearchProps {
    isLoading: boolean
    onChange: (value: string) => void
}

export const Search: FC<ISearchProps> = memo(({ onChange, isLoading }) => {
    const [hasFocus, setFocus] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null!)

    useKeyboardSearchFocus(inputRef)
    const onInputFocus = useCallback(() => setFocus(true), [])
    const onInputBlur = useCallback(() => {
        setFocus(false)
        inputRef.current.value = ''
    }, [])

    const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) =>
        onChange(evt.target.value)
    const debouncedOnChangeInput = debounce(onChangeInput)

    return (
        <section className="search">
            <h2 className="visually-hidden">Поиск</h2>
            <div className="search__flex-wrapper">
                <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass} />
                <input
                    ref={inputRef}
                    className="search__input"
                    placeholder="Search"
                    onChange={debouncedOnChangeInput}
                    onFocus={onInputFocus}
                    onBlur={onInputBlur}
                />
                <div
                    className={classNames('doc-search', { 'doc-search_hide': hasFocus })}
                >
                    <span className="doc-search__key">ctrl</span>
                    <span className="doc-search__key">k</span>
                </div>
                {isLoading && (
                    <FontAwesomeIcon className="search__icon" icon={faSpinner} />
                )}
            </div>
        </section>
    )
})
