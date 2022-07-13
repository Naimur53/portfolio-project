import RecentMomentChart from "../../src/Components/DashboardCompo/RecentMomentChart";
import DashboardLayout from "../../src/Layouts/DashboardLayout";
import { Box, Container, Stack, Grid, Paper, Typography, IconButton, CircularProgress } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Area, AreaChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import axios from 'axios';
import CountUp from 'react-countup';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import CategoryIcon from '@mui/icons-material/Category';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

import dynamic from "next/dynamic";
const RoundedServiceCart = dynamic(() => import("../../src/Components/DashboardCompo/RoundedServiceCart"), {
    ssr: false
})
const Dashboard = (props) => {
    const [users, setUsers] = useState(0)
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState(0)
    const [blogLC, setBlogLC] = useState({ comment: 0, love: 0 })
    const [last7Post, setLast7Post] = useState([])
    useEffect(() => {
        setLoading(true)
        const allUrl = [axios.get('https://stark-atoll-95180.herokuapp.com/totalUser'), axios.get('https://stark-atoll-95180.herokuapp.com/totalCategories'), axios.get('https://stark-atoll-95180.herokuapp.com/blogTotalLC'), axios.get('https://stark-atoll-95180.herokuapp.com/last7blog'), axios.get('https://stark-atoll-95180.herokuapp.com/blogCount')]
        Promise.all(allUrl)
            .then(res => {
                console.log(res);
                setUsers(res[0].data?.user)
                setCategories(res[1].data?.categories)
                const allBlogLC = res[2].data;
                let value = {
                    comment: 0,
                    love: 0,
                    totalBlog: res[4].data.blog
                }
                allBlogLC.forEach(single => {
                    value.comment = value.comment + single.comment
                    value.love = value.comment + single.love
                })
                setBlogLC(value)
                let lastBlogs = [];
                res[3].data.forEach(single => {
                    lastBlogs = [...lastBlogs, { ...single, date: 'Date: ' + new Date(single.date).getDate() }]
                })
                setLast7Post(lastBlogs)
                setLoading(false)

            })
    }, [])
    if (loading) {
        return <div className="flex justify-center">
            <CircularProgress color="inherit"></CircularProgress>
        </div>
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
                <Box sx={{ p: 2, background: 'rgb(17 24 39)' }} >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: 'center'
                    }}>
                        <h2 className="text-xl text-white">Loves</h2>
                        <IconButton
                            sx={{
                                background: 'hsl(215deg 69% 90%)',
                                color: 'hsl(215deg 70% 71%)'
                            }}
                        > <FavoriteIcon></FavoriteIcon></IconButton>
                    </Box>
                    <h2 variant='h5' className='text-center p-4 text-white text-4xl' gutterBottom><CountUp end={blogLC.love} /></h2>
                    <h2 className="text-red-500">Total Love Of Blog</h2>
                </Box>
            </Grid>
            <Grid item xs={12} md={3}>
                <Box sx={{ p: 2, background: 'rgb(17 24 39)' }} >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: 'center'
                    }}>
                        <h2 className="text-xl text-white">Comments</h2>
                        <IconButton
                            sx={{
                                background: 'hsl(215deg 69% 90%)',
                                color: 'hsl(215deg 70% 71%)'
                            }}
                        > <CommentIcon></CommentIcon></IconButton>
                    </Box>
                    <h2 className='text-center text-white p-4 text-4xl' gutterBottom><CountUp end={blogLC.comment} /></h2>
                    <h2 className="text-green-500">Total Comments</h2>
                </Box>
            </Grid>
            <Grid item xs={12} md={3}>
                <Box sx={{ p: 2, background: 'rgb(17 24 39)' }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: 'center'
                    }}>
                        <h2 className="text-xl text-white">Categories</h2>
                        <IconButton
                            sx={{
                                background: 'hsl(215deg 69% 90%)',
                                color: 'hsl(215deg 70% 71%)'
                            }}
                        > <CategoryIcon></CategoryIcon></IconButton>
                    </Box>
                    <h2 className='text-center text-4xl p-4 text-white' variant='h5' gutterBottom><CountUp end={categories} /></h2>
                    <h2 className="text-green-500">All Categories</h2>
                </Box>
            </Grid>
            <Grid item xs={12} md={3}>
                <Box sx={{ p: 2, background: 'rgb(17 24 39)' }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: 'center'
                    }}>
                        <h2 className="text-xl text-white">Users</h2>
                        <IconButton
                            sx={{
                                background: 'hsl(215deg 69% 90%)',
                                color: 'hsl(215deg 70% 71%)'
                            }}
                        > <ConnectWithoutContactIcon></ConnectWithoutContactIcon></IconButton>
                    </Box>
                    <h2 className='text-center p-4 text-4xl text-white' variant='h5' gutterBottom><CountUp end={users} /></h2>
                    <h2 className="text-red-500">Total User Login</h2>

                </Box>
            </Grid>

            <Grid item xs={12} md={7}>
                <RecentMomentChart data={last7Post}></RecentMomentChart>
            </Grid>
            <Grid item xs={12} md={5}>
                <RoundedServiceCart info={
                    {
                        blogLC,
                        users,
                        categories,
                    }
                } ></RoundedServiceCart>
            </Grid>
        </Grid>

    )
};
Dashboard.Layout = DashboardLayout
export default Dashboard;