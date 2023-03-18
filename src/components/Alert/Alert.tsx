import React, { FC, PropsWithChildren } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons/faCircleExclamation";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";

interface IAlertProps {
    msg: string,
    type: 'error' | 'success' | 'warning',
}

const renderIcon = {
    success: () => <FontAwesomeIcon icon={faCircleCheck}/>,
    error: () => <FontAwesomeIcon icon={faCircleExclamation}/>,
    warning: () => <FontAwesomeIcon icon={faTriangleExclamation}/>,
}

const Alert: FC<PropsWithChildren<IAlertProps>> = ({ msg, type }) => {
    return (
        <div className="alert">
            <div className="alert__flex-wrapper">
                <>
                    {renderIcon[type]}
                    <p className="alert__message">{msg}</p>
                </>
            </div>
        </div>
    );
};

export default Alert;
