import React from 'react'
import { CSSTransition } from 'react-transition-group'
import type { FC } from 'react'

import './Lightnings.scss'

type LightningProps = {
    in: boolean
    children: JSX.Element
}

export const Lightnings: FC<LightningProps> = ({ in: inProp, children }) => (
    <CSSTransition in={inProp} timeout={750} classNames="lightnings">
        <div className="lightnings">{children}</div>
    </CSSTransition>
)
