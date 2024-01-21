import React from 'react'
import { CSSTransition } from 'react-transition-group'
import type { FC } from 'react'
import type { BaseComponentProps } from '@shared/types'
import classNames from 'classnames'

import './Lightnings.scss'

type LightningProps = BaseComponentProps & {
    in: boolean
    children: JSX.Element
}

export const Lightnings: FC<LightningProps> = ({
    className = '',
    in: inProp,
    children,
}) => (
    <CSSTransition
        classNames={classNames('lightnings', className)}
        in={inProp}
        timeout={750}
    >
        <div className="lightnings">{children}</div>
    </CSSTransition>
)
