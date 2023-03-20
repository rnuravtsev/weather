import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons/faCircleExclamation'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import type { FC, PropsWithChildren } from 'react'

type TRenderIcon = {
    [key in IAlertProps['type']]: () => JSX.Element
}

interface IAlertProps {
    msg: string
    type: 'error' | 'success' | 'warning'
}

const renderIcon: TRenderIcon = {
    success: () => <FontAwesomeIcon icon={faCircleCheck} />,
    error: () => <FontAwesomeIcon icon={faCircleExclamation} />,
    warning: () => <FontAwesomeIcon icon={faTriangleExclamation} />,
}

const Alert: FC<PropsWithChildren<IAlertProps>> = ({ msg, type }) => (
    <div className="alert">
        <div className="alert__flex-wrapper">
            {renderIcon[type]()}
            <p className="alert__message">{msg}</p>
        </div>
    </div>
)

export default Alert
