import React from 'react';
import { Box, Container, Stack, Grid, Paper, Typography, IconButton } from '@mui/material';

import { Area, AreaChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const RecentMomentChart = ({ data }) => {

    return (
        <Box sx={{ p: 2, background: 'rgb(17 24 39)' }}>
            <Typography gutterBottom variant='h6' color="white">Recent Moment</Typography>
            <ResponsiveContainer width="100%" height={220}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip
                        wrapperStyle={{ background: 'black' }}
                        contentStyle={{ background: 'black' }}
                    />

                    <Area type="monotone" dataKey="comment" stroke="white" strokeDasharray="5 5" fillOpacity={1} fill="transparent" />
                    <Area type="monotone" dataKey="love" stroke="#d2365e" fillOpacity={1} fill="#d2365e1f" />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default RecentMomentChart;