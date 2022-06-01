import { Container, Grid } from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React, { useEffect } from 'react';
import BlogLeft from '../../src/Components/BlogLeft/BlogLeft';
import { addBlogDetails, allData } from '../../src/dataSlice/dataSlice'
import BlogRight from '../../src/Components/BlogRight/BlogRight';
import { wrapper } from '../../src/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Head } from '../../src/Components/Head/Head';
import BlogPageBanner from '../../src/Components/BlogPageBanner/BlogPageBanner';

const SingleBlog = () => {
    const { blogDetails } = useSelector(allData);
    const dispatch = useDispatch();
    return (
        <div >
            <Head title={blogDetails.heading?.slice(0, 20)}></Head>
            <BlogPageBanner></BlogPageBanner>
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