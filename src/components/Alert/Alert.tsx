import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons/faCircleExclamation'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import type { FC, PropsWithChildren } from 'react'
import type { Status } from '../../shared/model/types'

interface IAlertProps {
    message: string
    type: Status
}

const renderIcon: Record<Status, JSX.Element> = {
    success: <FontAwesomeIcon icon={faCircleCheck} />,
    error: <FontAwesomeIcon icon={faCircleExclamation} />,
    warning: <FontAwesomeIcon icon={faTriangleExclamation} />,
}

const Alert: FC<PropsWithChildren<IAlertProps>> = ({ message, type }) => (
    <div className="alert">
        <div className="alert__flex-wrapper">
            {renderIcon[type]}
            <p className="alert__message">{message}</p>
        </div>
    </div>
)

export default Alert
