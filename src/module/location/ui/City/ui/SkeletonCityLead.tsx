import React, { memo } from 'react'
import ContentLoader from 'react-content-loader'
import { useAppSelector } from '@shared/store/hooks'
import { AppTheme } from '@shared/types'
import { selectUserTheme } from '@module/theme/store/themeSlice'
import AutoSizer from 'react-virtualized-auto-sizer'

// TODO: Переписать на Skeleton-CSS

const Canvas = {
    WIDTH: 886,
    HEIGHT: 988,
    HOUR_GAP: 50,
    HOUR_INIT_X: 25,
    HOUR_INIT_Y: 180,
    HOUR_GAP_Y: 55,
    HOUR_GAP_X: 207,
    DAY_GAP: 50,
    DAY_INIT_X: 15,
    DAY_INIT_Y: 460,
    DAY_GAP_Y: 53,
    DAY_GAP_X: 222,
    DAY_COLUMN_GAP: 51,
    LIGHT_THEME_BACKGROUND: '#cbcbce',
    DARK_THEME_BACKGROUND: '#28292d',
    LIGHT_THEME_FOREGROUND: '#dfdedb',
    DARK_THEME_FOREGROUND: '#b5b3ac',
}

export const SkeletonCityLead = memo(() => {
    const theme = useAppSelector(selectUserTheme)

    const skeletonHours: JSX.Element[] = []
    const skeletonWeek: JSX.Element[] = []

    const renderHoursSkeleton = (count: number): JSX.Element[] => {
        if (count <= 0) {
            return skeletonHours
        }

        skeletonHours.push(
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
            </>,
        )

        return renderHoursSkeleton(count - 1)
    }

    const renderWeekSkeleton = (width: number, count: number): JSX.Element[] => {
        if (count <= 0) {
            return skeletonWeek
        }

        const randomWidth = Math.random() * 85

        skeletonWeek.push(
            <>
                <rect
                    x={Canvas.DAY_INIT_X}
                    y={
                        Canvas.DAY_INIT_Y +
                        Canvas.DAY_COLUMN_GAP +
                        Canvas.DAY_GAP_Y * (count - 1)
                    }
                    rx="5"
                    ry="2"
                    width={randomWidth < 60 ? 60 : randomWidth}
                    height="20"
                />
                <rect
                    x={Canvas.DAY_INIT_X + 510}
                    y={
                        Canvas.DAY_INIT_Y +
                        Canvas.DAY_COLUMN_GAP +
                        Canvas.DAY_GAP_Y * (count - 1)
                    }
                    rx="5"
                    ry="2"
                    width="45"
                    height="30"
                />
                <rect
                    x={width - 80}
                    y={
                        Canvas.DAY_INIT_Y +
                        Canvas.DAY_COLUMN_GAP +
                        Canvas.DAY_GAP_Y * (count - 1)
                    }
                    rx="5"
                    ry="2"
                    width="80"
                    height="20"
                />
            </>,
        )

        return renderWeekSkeleton(width, count - 1)
    }

    return (
        <div style={{ flex: '1 1 auto' }}>
            <AutoSizer>
                {({ width, height }) => (
                    <ContentLoader
                        speed={1.5}
                        width={width}
                        height={height}
                        className="city"
                        viewBox={`0 0 ${width} ${height}`}
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
                        {/* Left Column */}
                        <rect x="0" y="0" rx="5" ry="2" width="148" height="35" />
                        <rect x="0" y="55" rx="5" ry="2" width="80" height="80" />
                        {/* Right Column */}
                        <rect x={width - 40} y="0" rx="5" ry="2" width="40" height="30" />
                        <rect
                            x={width - 100}
                            y="40"
                            rx="5"
                            ry="2"
                            width="100"
                            height="20"
                        />
                        <rect
                            x={width - 85}
                            y="65"
                            rx="5"
                            ry="2"
                            width="85"
                            height="20"
                        />
                        <rect
                            x={width - 210}
                            y="90"
                            rx="5"
                            ry="2"
                            width="250"
                            height="25"
                        />
                        {/* Hour Forecast */}
                        <rect
                            x="15"
                            y={Canvas.HOUR_INIT_Y}
                            rx="5"
                            ry="2"
                            width="145"
                            height="20"
                        />
                        {renderHoursSkeleton(5)}
                        {/* Week Forecast */}
                        <rect
                            x="15"
                            y={Canvas.DAY_INIT_Y}
                            rx="5"
                            ry="2"
                            width="160"
                            height="20"
                        />
                        {renderWeekSkeleton(width, 8)}
                    </ContentLoader>
                )}
            </AutoSizer>
        </div>
    )
})
