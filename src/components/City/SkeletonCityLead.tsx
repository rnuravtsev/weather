import React from 'react'
import ContentLoader from 'react-content-loader'

const Options = {
    X: 0,
    Y: 0,
    GAP_Y: 20,
    WIDTH: 955,
    HEIGHT: 152,
}

const SkeletonCityLead = () => {
    return (
        <ContentLoader
            speed={1.5}
            width={Options.WIDTH}
            height={Options.HEIGHT}
            viewBox={`0 0 ${Options.WIDTH} ${Options.HEIGHT}`}
            backgroundColor="#bcb8b8"
            foregroundColor="#c4c0c0"
        >
            <rect x="0" y="0" rx="0" ry="0" width="148" height="20" />
            <rect x="0" y="35" rx="0" ry="0" width="179" height="20" />
            <rect x="0" y="75" rx="0" ry="0" width="80" height="80" />
            <rect x={Options.WIDTH - 55} y="32" rx="0" ry="0" width="55" height="25" />
            <rect x={Options.WIDTH - 150} y="62" rx="0" ry="0" width="150" height="20" />
            <rect x={Options.WIDTH - 180} y="92" rx="0" ry="0" width="180" height="20" />
            <rect x={Options.WIDTH - 100} y="122" rx="0" ry="0" width="100" height="20" />
            <rect x={Options.WIDTH - 200} y="152" rx="0" ry="0" width="200" height="20" />
        </ContentLoader>
    )
};

export default SkeletonCityLead
