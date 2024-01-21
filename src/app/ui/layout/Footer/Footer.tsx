import type { FC } from 'react'
import React from 'react'
import type { BaseComponentProps } from '@shared/types'
import classNames from 'classnames'

import './Footer.scss'

type FooterProps = BaseComponentProps

export const Footer: FC<FooterProps> = ({ className = '' }) => (
    <footer className={classNames('footer', className)}>
        <p className="footer__sign">
            <b>
                mw <span className="footer__heart">{`<3`}</span>
            </b>
        </p>
        <p>
            Powered by{' '}
            <a
                href="https://openweathermap.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                openweathermap.org
            </a>
        </p>
    </footer>
)
