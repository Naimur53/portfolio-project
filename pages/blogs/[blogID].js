import { Container, Grid } from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React, { useEffect } from 'react';
import BlogLeft from '../../src/Components/BlogLeft/BlogLeft';
import { addBlogDetails, allData } from '../../src/dataSlice/dataSlice'
import BlogRight from '../../src/Components/BlogRight/BlogRight';
import { wrapper } from '../../src/store/store';
import { useDispatch, useSelector } from 'react-redux';

const SingleBlog = () => {
    const { blogDetails } = useSelector(allData);
    const dispatch = useDispatch();
    return (
        <div pages={4} >
            <div
                style={
                    {
                        background: `linear-gradient(to bottom,  rgba(0,0,0,0.6) 0%,rgba(19,19,19,1) 100%),url(${blogDetails.img})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '60vh',
                    }
                }
            >
                <div >
                    <h1 className='text-3xl'>{blogDetails.heading}</h1>
                    <div className="flex  justify-center mt-3">
                        <div className='w-96  flex justify-between'>
                            <span>Home</span>
                            <span>/</span>
                            <span>Blogs</span>
                            <span>/</span>
                            <span>{blogDetails.heading?.slice(0, 20)}...</span>
                        </div>

                    </div>

                </div>

            </div>
            <Container maxWidth='lg' className='bg-transparent-black   py-10'>
                <Grid container spacing={2}>
                    <Grid xs={4}>
                        <BlogLeft></BlogLeft>
                    </Grid>
                    <Grid xs={8}>
                        <BlogRight></BlogRight>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default SingleBlog;
export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async ({ params }) => {
        const res = await fetch(`http://localhost:5000/blog?id=${params.blogID}`)
        const data = await res.json();
        store.dispatch(addBlogDetails(data))
    })