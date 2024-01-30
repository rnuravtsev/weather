import type { FC } from 'react'
import React, { memo, useRef, useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

import { useLazyFetchLocationQuery } from '@module/location/api/locationApi'
import { useAppSelector } from '@shared/store'
import { useDebounce } from '@shared/hooks/useDebounce'
import type { BaseComponentProps } from '@shared/types'
import { selectCurrentCity } from '../../../store'
import { useKeyboardSearchFocus } from '../hooks/useKeyboardSearchFocus'

import './Search.scss'

type SearchProps = BaseComponentProps

export const Search: FC<SearchProps> = memo(({ className = '' }) => {
    const [inputValue, setInputValue] = useState('')
    const [hasInputFocus, setInputFocus] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null!)
    const { keyName } = useKeyboardSearchFocus(inputRef)

    const currentCity = useAppSelector(selectCurrentCity)
    const [fetchPlace, { isLoading }] = useLazyFetchLocationQuery()

    const debouncedSearch = useDebounce(() => {
        if (inputValue.length < 3) return

        fetchPlace({ place: inputValue })
            .unwrap()
            .then(() => setInputValue(''))
    }, 750)

    const onInputFocus = () => {
        setInputFocus(true)
    }

    const onInputBlur = () => {
        setInputValue('')
        setInputFocus(false)
    }

    const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target
        setInputValue(value)

        debouncedSearch()
    }

    return (
        <section
            className={classNames('search', className, {
                search_animated: !currentCity,
            })}
        >
            <h2 className="visually-hidden">Поиск</h2>
            <div className="search__wrapper">
                {isLoading ? (
                    <FontAwesomeIcon className="search__icon" icon={faSpinner} />
                ) : (
                    <FontAwesomeIcon className="search__icon" icon={faMagnifyingGlass} />
                )}
                <input
                    ref={inputRef}
                    className="search__input"
                    placeholder="Search"
                    value={inputValue}
                    onChange={onChangeInput}
                    onFocus={onInputFocus}
                    onBlur={onInputBlur}
                />
                <div
                    className={classNames('keyboard-keys', {
                        'keyboard-keys_hide': hasInputFocus,
                    })}
                >
                    <span className="keyboard-keys__key">{keyName}</span>
                    <span className="keyboard-keys__key">K</span>
                </div>
            </div>
        </section>
    )
})
