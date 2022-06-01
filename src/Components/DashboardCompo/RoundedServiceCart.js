import React, { useState } from 'react';
import { ResponsivePie } from '@nivo/pie'

const RoundedServiceCart = () => {

    const [data, setData] = useState([
        {
            "id": "ruby",
            "label": "ruby",
            "value": 0,
            "color": "hsl(143, 70%, 50%)"
        },
        {
            "id": "scala",
            "label": "scala",
            "value": 0,
            "color": "hsl(163, 70%, 50%)"
        },
        {
            "id": "sass",
            "label": "sass",
            "value": 0,
            "color": "hsl(337, 70%, 50%)"
        },
        {
            "id": "javascript",
            "label": "javascript",
            "value": 0,
            "color": "hsl(273, 70%, 50%)"
        },
        {
            "id": "c",
            "label": "c",
            "value": 0,
            "color": "hsl(175, 70%, 50%)"
        }
    ])
    setTimeout(() => {
        setData([
            {
                "id": "ruby",
                "label": "ruby",
                "value": 342,
                "color": "hsl(143, 70%, 50%)"
            },
            {
                "id": "scala",
                "label": "scala",
                "value": 357,
                "color": "hsl(163, 70%, 50%)"
            },
            {
                "id": "sass",
                "label": "sass",
                "value": 146,
                "color": "hsl(337, 70%, 50%)"
            },
            {
                "id": "javascript",
                "label": "javascript",
                "value": 180,
                "color": "hsl(273, 70%, 50%)"
            },
            {
                "id": "c",
                "label": "c",
                "value": 260,
                "color": "hsl(175, 70%, 50%)"
            }])
    }, 1000);
    return (
        <div className='bg-gray-900 rounded-md w-full' style={{ height: 300, }}>
            <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                animate={true}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                transitionMode="pushOut"

                motionConfig={{
                    mass: 1,
                    tension: 170,
                    friction: 26,
                    clamp: false,
                    precision: 0.01,
                    velocity: 0
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#fff"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            2
                        ]
                    ]
                }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                ]}

            />
        </div>
    );
};

export default RoundedServiceCart;