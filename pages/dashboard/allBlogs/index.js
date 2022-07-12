import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@mui/material'
import axios from 'axios';
import DashboardLayout from '../../../src/Layouts/DashboardLayout';
import BlogCard from '../../../src/Components/BlogCard/BlogCard';
import { toast } from 'react-toastify';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://stark-atoll-95180.herokuapp.com/blog')
            .then(res => {
                setBlogs(res.data);
                setLoading(false)

            })
    }, [])
    if (loading) {
        return <div className='flex justify-center'>
            <CircularProgress color='inherit'></CircularProgress>
        </div>
    }
    console.log(blogs);
    const handleDelete = (id, setDeleteLoading) => {
        if (window.confirm("Are you sure to Delete this blog?")) {
            console.log(id);
            setDeleteLoading(true)
            axios.delete(`https://stark-atoll-95180.herokuapp.com/blog/delete?id=${id}`)
                .then(res => {
                    setDeleteLoading(false);
                    // remove blog card 
                    setBlogs(blogs.filter(single => single._id !== id))

                    toast.success('successfully delete', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }).catch(e => {
                    setDeleteLoading(false)
                    toast.error('Unknown error happen on deleting blog', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })

        }
    }
    return (
        <Grid container spacing={2}>
            {
                blogs?.map(singleBlog => <Grid item key={singleBlog._id} xs={12} md={4}><BlogCard admin  {...singleBlog} handleDelete={handleDelete}></BlogCard></Grid>)
            }
        </Grid>
    );
};
AllBlogs.Layout = DashboardLayout;

export default AllBlogs;