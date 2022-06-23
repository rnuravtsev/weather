import React from 'react'
import ContentLoader from 'react-content-loader'
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../ducks/store";

const Options = {
    WIDTH: 955,
    HEIGHT: 152,
    LIGHT_THEME_BACKGROUND: '#a5dcfd',
    DARK_THEME_BACKGROUND: '#28292d',
    LIGHT_THEME_FOREGROUND: '#dfdedb',
    DARK_THEME_FOREGROUND: '#b5b3ac',
}

const SkeletonCityLead = () => {
    const theme = useAppSelector((state: RootState) => state.userReducer.theme)

    return (
        <ContentLoader
            speed={1.5}
            width={Options.WIDTH}
            height={Options.HEIGHT}
            viewBox={`0 0 ${Options.WIDTH} ${Options.HEIGHT}`}
            backgroundColor={theme === 'light' ? Options.LIGHT_THEME_BACKGROUND : Options.DARK_THEME_BACKGROUND}
            foregroundColor={theme === 'light' ? Options.LIGHT_THEME_FOREGROUND : Options.DARK_THEME_FOREGROUND}
        >
            <rect x="0" y="0" rx="0" ry="0" width="148" height="20" />
            <rect x="0" y="35" rx="0" ry="0" width="179" height="20" />
            <rect x="0" y="75" rx="0" ry="0" width="80" height="80" />
            <rect x={Options.WIDTH - 55} y="30" rx="0" ry="0" width="55" height="25" />
            <rect x={Options.WIDTH - 150} y="60" rx="0" ry="0" width="150" height="20" />
            <rect x={Options.WIDTH - 180} y="90" rx="0" ry="0" width="180" height="20" />
            <rect x={Options.WIDTH - 100} y="120" rx="0" ry="0" width="100" height="20" />
        </ContentLoader>
    )
};

export default SkeletonCityLead
