import classNames from 'classnames'
import type { FC } from 'react'
import type { BaseComponentProps } from '@shared/types'
import { memo } from 'react'

import './SplashScreen.scss'

type SplashScreenProps = BaseComponentProps

export const SplashScreen: FC<SplashScreenProps> = memo(({ className = '' }) => (
    <div className={classNames('splash-screen', className)}>
        <div className="splash-screen__animation">Loading...</div>
    </div>
))
