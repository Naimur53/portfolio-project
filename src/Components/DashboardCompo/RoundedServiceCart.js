import React, { useState } from 'react';
import { ResponsivePie } from '@nivo/pie'

const RoundedServiceCart = ({ info }) => {

    const data = [
        {
            "id": "User",
            "label": "User",
            "value": info.users,
            "color": "hsl(143, 70%, 50%)"
        },
        {
            "id": "Gallery",
            "label": "Gallery",
            "value": info.categories,
            "color": "hsl(163, 70%, 50%)"
        },
        {
            "id": "Love",
            "label": "Love",
            "value": info.blogLC?.love,
            "color": "hsl(337, 70%, 50%)"
        },
        {
            "id": "Comments",
            "label": "Comments",
            "value": info.blogLC?.comment,
            "color": "hsl(273, 70%, 50%)"
        },
        {
            "id": "Blogs",
            "label": "Blogs",
            "value": info.blogLC?.totalBlog,
            "color": "hsl(175, 70%, 50%)"
        }]

    return (
        <div className='bg-gray-900 rounded-md w-full' style={{ height: 300, }}>
            <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                animate={true}
                cornerRadius={3}
                tooltip={(e) => {

                    return <div className='flex bg-black text-white items-center p-2'>
                        <div className='w-4 mr-4 h-4' style={{ background: e.datum.color }}>
                        </div>
                        <div>{e.datum.data.id} {e.datum.data.value}</div>
                    </div>

                }}

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