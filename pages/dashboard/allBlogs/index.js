import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@mui/material'
import axios from 'axios';
import DashboardLayout from '../../../src/Layouts/DashboardLayout';
import BlogCard from '../../../src/Components/BlogCard/BlogCard';
import { toast } from 'react-toastify';
import fetcher from '../../../src/util/fatcher';
import useSWR from 'swr'
import { useSelector } from 'react-redux';
import { allData } from '../../../src/dataSlice/dataSlice';
const AllBlogs = () => {
    const { user } = useSelector(allData)
    const [blogs, setBlogs] = useState([])
    const { data, error } = useSWR(
        "https://jhon-portfolio-server-production.up.railway.app/blog",
        fetcher
    );
    useEffect(() => {
        setBlogs(data)
    }, [data])
    if (!blogs?.length) {
        return <div className='flex justify-center'>
            <CircularProgress sx={{ color: 'white' }}></CircularProgress>
        </div>
    }

    const handleDelete = (id, setDeleteLoading) => {
        if (window.confirm("Are you sure to Delete this blog?")) {

            setDeleteLoading(true)
            axios.delete(`https://jhon-portfolio-server-production.up.railway.app/blog/delete?id=${id}`, {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('idToken')
                },
                data: {
                    user: user?.email
                }
            })
                .then(res => {
                    setBlogs(be => be._id !== id)
                    setDeleteLoading(false);
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

                    if (e.response?.data?.error === 'UnAuthorize') {

                        toast.error('UnAuthorize try to reload or re-login to the site ' + e.message, {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    } else {
                        toast.error('Something bad happened when post the blog' + e.message, {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                })

        }
    }
    return (
        <Grid container spacing={2}>
            {
                blogs?.map(singleBlog => <Grid item key={singleBlog._id} xs={12} md={3}><BlogCard admin  {...singleBlog} handleDelete={handleDelete}></BlogCard></Grid>)
            }
        </Grid>
    );
};
AllBlogs.Layout = DashboardLayout;

export default AllBlogs;