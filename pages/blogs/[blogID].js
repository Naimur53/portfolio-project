import { Container, Grid } from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React, { useEffect } from 'react';
import BlogLeft from '../../src/Components/BlogLeft/BlogLeft';
import { addBlogDetails, allData } from '../../src/dataSlice/dataSlice'
import BlogRight from '../../src/Components/BlogRight/BlogRight';
import { wrapper } from '../../src/store/store';
import { useDispatch, useSelector } from 'react-redux';
import Head from '../../src/Components/Head/Head';
import BlogPageBanner from '../../src/Components/BlogPageBanner/BlogPageBanner';

const SingleBlog = () => {
    const { blogDetails } = useSelector(allData);
    const dispatch = useDispatch();
    return (
        <div className='bg-cover' style={{ backgroundImage: 'url(https://i.ibb.co/n7xmh1M/NEW-Background.jpg)', minHeight: '100vh' }}>
            <Head title={blogDetails.heading?.slice(0, 20)} keywords={blogDetails.tags}></Head>
            <BlogPageBanner></BlogPageBanner>
            <Container className='  overflow-hidden flex flex-col justify-center items-center  py-10'>
                {/* <Grid container className='md:flex-row flex-col-reverse w-full' spacing={2}>
                    <Grid xs={12} md={4}>
                        <BlogLeft></BlogLeft>
                    </Grid>
                    <Grid xs={12} md={8}>
                       
                    </Grid>

                </Grid> */}
                <BlogRight></BlogRight>
            </Container>
        </div>
    );
};

export default SingleBlog;
export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async ({ params }) => {
        const res = await fetch(`https://stark-atoll-95180.herokuapp.com/blog?id=${params.blogID}`)
        const data = await res.json();
        store.dispatch(addBlogDetails(data))
    })