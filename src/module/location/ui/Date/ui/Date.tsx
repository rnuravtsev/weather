import type { FC } from 'react'
import React from 'react'
import type { BaseComponentProps } from '@shared/types'
import classNames from 'classnames'
import { getTodayDate } from '../lib'

import './Date.scss'

type DateProps = BaseComponentProps

export const Date: FC<DateProps> = ({ className = '' }) => (
    <section className={classNames('date', className)}>
        <h2 className="date__title">Date</h2>
        <p className="date__day">{getTodayDate()}</p>
    </section>
)
