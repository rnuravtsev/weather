import React from 'react'
import ContentLoader from 'react-content-loader'
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../ducks/store";

const Options = {
    WIDTH: 955,
    HEIGHT: 950,
    HOUR_GAP: 50,
    HOUR_INIT_X: 25,
    HOUR_INIT_Y: 250,
    HOUR_GAP_Y: 55,
    HOUR_GAP_X: 222,
    LIGHT_THEME_BACKGROUND: '#a5dcfd',
    DARK_THEME_BACKGROUND: '#28292d',
    LIGHT_THEME_FOREGROUND: '#dfdedb',
    DARK_THEME_FOREGROUND: '#b5b3ac',
}

const SkeletonCityLead = () => {
    const theme = useAppSelector((state: RootState) => state.userReducer.theme)

    let skeletonHours: JSX.Element[] = []
    const renderHoursSkeleton = (initial: number) : JSX.Element[] => {
        if (initial <= 0) {
            return skeletonHours
        }

        const renderHour = () => {
            return (
                <>
                    <rect x={Options.HOUR_INIT_X + Options.HOUR_GAP_X * (initial - 1)} y={Options.HOUR_INIT_Y + 60} rx="0" ry="0" width="25"
                          height="20"/>
                    <rect x={Options.HOUR_INIT_X - 10 + Options.HOUR_GAP_X * (initial - 1)} y={(Options.HOUR_INIT_Y + 60) + Options.HOUR_GAP_Y}
                          rx="0" ry="0" width="45" height="20"/>
                    <rect x={Options.HOUR_INIT_X + Options.HOUR_GAP_X * (initial - 1)} y={(Options.HOUR_INIT_Y + 60) + Options.HOUR_GAP_Y * 2}
                          rx="0" ry="0" width="25" height="20"/>
                </>
            )
        }

        skeletonHours.push(renderHour())

        return renderHoursSkeleton(--initial)
    }

    return (
        <ContentLoader
            speed={1.5}
            width={Options.WIDTH}
            height={Options.HEIGHT}
            viewBox={`0 0 ${Options.WIDTH} ${Options.HEIGHT}`}
            backgroundColor={theme === 'light' ? Options.LIGHT_THEME_BACKGROUND : Options.DARK_THEME_BACKGROUND}
            foregroundColor={theme === 'light' ? Options.LIGHT_THEME_FOREGROUND : Options.DARK_THEME_FOREGROUND}
        >
            <rect x="0" y="0" rx="0" ry="0" width="148" height="20"/>
            <rect x="0" y="35" rx="0" ry="0" width="179" height="20"/>
            <rect x="0" y="75" rx="0" ry="0" width="80" height="80"/>
            <rect x={Options.WIDTH - 55} y="30" rx="0" ry="0" width="55" height="25"/>
            <rect x={Options.WIDTH - 150} y="65" rx="0" ry="0" width="150" height="20"/>
            <rect x={Options.WIDTH - 180} y="100" rx="0" ry="0" width="180" height="20"/>
            <rect x={Options.WIDTH - 250} y="135" rx="0" ry="0" width="250" height="20"/>
            {/*Hour Forecast*/}
            <rect x="0" y={Options.HOUR_INIT_Y} rx="0" ry="0" width="145" height="20"/>
            {renderHoursSkeleton(5)}
        </ContentLoader>
    )
};

export default SkeletonCityLead
