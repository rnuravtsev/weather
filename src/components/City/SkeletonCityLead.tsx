import React, { memo } from 'react'
import ContentLoader from 'react-content-loader'
import { useAppSelector } from '../../ducks/hooks/redux'
import { selectUserTheme } from '../../ducks/slices/userSlice'
import { AppTheme } from '../../shared/types'

const Canvas = {
    WIDTH: 886,
    HEIGHT: 988,
    HOUR_GAP: 50,
    HOUR_INIT_X: 25,
    HOUR_INIT_Y: 250,
    HOUR_GAP_Y: 55,
    HOUR_GAP_X: 207,
    DAY_GAP: 50,
    DAY_INIT_X: 0,
    DAY_INIT_Y: 550,
    DAY_GAP_Y: 50,
    DAY_GAP_X: 222,
    LIGHT_THEME_BACKGROUND: '#a5dcfd',
    DARK_THEME_BACKGROUND: '#28292d',
    LIGHT_THEME_FOREGROUND: '#dfdedb',
    DARK_THEME_FOREGROUND: '#b5b3ac',
}

const SkeletonCityLead = memo(() => {
    const theme = useAppSelector(selectUserTheme)

    const skeletonHours: JSX.Element[] = []
    const skeletonWeek: JSX.Element[] = []

    const renderHoursSkeleton = (count: number): JSX.Element[] => {
        if (count <= 0) {
            return skeletonHours
        }

        const renderHour = () => (
            <>
                <rect
                    x={Canvas.HOUR_INIT_X + Canvas.HOUR_GAP_X * (count - 1)}
                    y={Canvas.HOUR_INIT_Y + 60}
                    rx="5"
                    ry="2"
                    width="25"
                    height="20"
                />
                <rect
                    x={Canvas.HOUR_INIT_X - 10 + Canvas.HOUR_GAP_X * (count - 1)}
                    y={Canvas.HOUR_INIT_Y + 60 + Canvas.HOUR_GAP_Y}
                    rx="5"
                    ry="2"
                    width="45"
                    height="20"
                />
                <rect
                    x={Canvas.HOUR_INIT_X + Canvas.HOUR_GAP_X * (count - 1)}
                    y={Canvas.HOUR_INIT_Y + 60 + Canvas.HOUR_GAP_Y * 2}
                    rx="5"
                    ry="2"
                    width="25"
                    height="20"
                />
            </>
        )

        skeletonHours.push(renderHour())

        return renderHoursSkeleton(count - 1)
    }

    const renderWeekSkeleton = (count: number): JSX.Element[] => {
        if (count <= 0) {
            return skeletonWeek
        }

        const renderDay = () => {
            const randomWidth = Math.random() * 85
            return (
                <>
                    <rect
                        x={Canvas.DAY_INIT_X}
                        y={Canvas.DAY_INIT_Y + 55 + Canvas.DAY_GAP_Y * (count - 1)}
                        rx="5"
                        ry="2"
                        width={randomWidth < 60 ? 60 : randomWidth}
                        height="20"
                    />
                    <rect
                        x={Canvas.DAY_INIT_X + 480}
                        y={Canvas.DAY_INIT_Y + 55 + Canvas.DAY_GAP_Y * (count - 1)}
                        rx="5"
                        ry="2"
                        width="45"
                        height="20"
                    />
                    <rect
                        x={Canvas.WIDTH - 120}
                        y={Canvas.DAY_INIT_Y + 55 + Canvas.DAY_GAP_Y * (count - 1)}
                        rx="5"
                        ry="2"
                        width="120"
                        height="20"
                    />
                </>
            )
        }

        skeletonWeek.push(renderDay())

        return renderWeekSkeleton(count - 1)
    }

    return (
        <ContentLoader
            speed={1.5}
            width={Canvas.WIDTH}
            height={Canvas.HEIGHT}
            className="city"
            style={{ width: '100%' }}
            viewBox={`0 0 ${Canvas.WIDTH} ${Canvas.HEIGHT}`}
            backgroundColor={
                theme === AppTheme.Light
                    ? Canvas.LIGHT_THEME_BACKGROUND
                    : Canvas.DARK_THEME_BACKGROUND
            }
            foregroundColor={
                theme === AppTheme.Light
                    ? Canvas.LIGHT_THEME_FOREGROUND
                    : Canvas.DARK_THEME_FOREGROUND
            }
        >
            <rect x="0" y="0" rx="5" ry="2" width="148" height="20" />
            <rect x="0" y="35" rx="5" ry="2" width="179" height="20" />
            <rect x="0" y="75" rx="5" ry="2" width="80" height="80" />
            <rect x={Canvas.WIDTH - 55} y="30" rx="5" ry="2" width="55" height="25" />
            <rect x={Canvas.WIDTH - 150} y="65" rx="5" ry="2" width="150" height="20" />
            <rect x={Canvas.WIDTH - 180} y="100" rx="5" ry="2" width="180" height="20" />
            <rect x={Canvas.WIDTH - 250} y="135" rx="5" ry="2" width="250" height="20" />
            {/* Hour Forecast */}
            <rect x="0" y={Canvas.HOUR_INIT_Y} rx="5" ry="2" width="145" height="20" />
            {renderHoursSkeleton(5)}
            {/* Week Forecast */}
            <rect x="0" y={Canvas.DAY_INIT_Y} rx="5" ry="2" width="160" height="20" />
            {renderWeekSkeleton(8)}
        </ContentLoader>
    )
})

export default SkeletonCityLead
