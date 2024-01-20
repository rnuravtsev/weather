import React from 'react'

import './Footer.scss'

const date = new Date()
export const Footer = () => (
    <footer className="footer">
        <p>
            mw {`<3`} {date.getFullYear()}
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
