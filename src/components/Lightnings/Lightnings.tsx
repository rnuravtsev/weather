import React from 'react'
import { CSSTransition } from 'react-transition-group'
import type { FC } from 'react'

import './Lightnings.scss'

interface ILightningProps {
    in: boolean
    children: JSX.Element
}

const Lightnings: FC<ILightningProps> = ({ in: inProp, children }) => (
    <CSSTransition in={inProp} timeout={750} classNames="lightnings">
        <div className="lightnings">{children}</div>
    </CSSTransition>
)

export default Lightnings
