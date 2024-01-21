import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons/faCircleExclamation'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import type { FC } from 'react'

import type { BaseComponentProps, Status } from '@shared/types'
import classNames from 'classnames'

type AlertProps = BaseComponentProps & {
    message: string
    type: Status
}

const renderIcon: Record<Status, JSX.Element> = {
    success: <FontAwesomeIcon icon={faCircleCheck} />,
    error: <FontAwesomeIcon icon={faCircleExclamation} />,
    warning: <FontAwesomeIcon icon={faTriangleExclamation} />,
}

const Alert: FC<AlertProps> = ({ className = '', message, type }) => (
    <div className={classNames('alert', className)}>
        <div className="alert__flex-wrapper">
            {renderIcon[type]}
            <p className="alert__message">{message}</p>
        </div>
    </div>
)

export default Alert
