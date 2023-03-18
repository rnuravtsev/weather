import React, { FC } from "react";
import { CSSTransition } from 'react-transition-group';
import './Lightnings.css'

interface ILightningProps {
    in: boolean,
    children: JSX.Element
}

const Lightnings: FC<ILightningProps> = ({ in: inProp, children }) => (
    <CSSTransition in={inProp} timeout={750} classNames="lightnings">
        <div className="lightnings">
            {children}
        </div>
    </CSSTransition>
);

export default Lightnings
