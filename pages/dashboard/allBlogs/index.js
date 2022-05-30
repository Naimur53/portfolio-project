import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@mui/material'
import axios from 'axios';
import DashboardLayout from '../../../src/Layouts/DashboardLayout';
import BlogCard from '../../../src/Components/BlogCard/BlogCard';
const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:5000/blog')
            .then(res => {
                setBlogs(res.data);
                setLoading(false)
            }).catch(e => {
                alert('some thing bad happened')
            })

    }, [])
    if (loading) {
        return <div className='flex justify-center'>
            <CircularProgress></CircularProgress>
        </div>
    }
    console.log(blogs);
    return (
        <Grid container spacing={4}>
            {
                blogs?.map(singleBlog => <Grid item key={singleBlog._id} xs={12} md={4}><BlogCard  {...singleBlog}></BlogCard></Grid>)
            }
        </Grid>
    );
};
AllBlogs.Layout = DashboardLayout;

export default AllBlogs;