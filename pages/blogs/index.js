import React from 'react';
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import BlogLeft from '../../src/Components/BlogLeft/BlogLeft';
import BlogCard from '../../src/Components/BlogCard/BlogCard';
import Head from '../../src/Components/Head/Head';
import BlogPageBanner from '../../src/Components/BlogPageBanner/BlogPageBanner';
const Blogs = ({ blogs }) => {
    console.log(blogs);
    return (

        <div className='bg-cover' style={{ backgroundImage: 'url(https://i.ibb.co/n7xmh1M/NEW-Background.jpg)', minHeight: '100vh' }} >
            <Head title='John Blogs'></Head>
            <BlogPageBanner default></BlogPageBanner>
            <Container maxWidth='lg' className=' flex flex-col justify-center items-center   py-10'>
                {/* <Grid container sx={{
                    flexDirection: { xs: 'column-reverse', md: 'row' }
                }} spacing={2}>
                    <Grid item xs={12} md={4}>
                        <BlogLeft></BlogLeft>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        
                    </Grid>

                </Grid> */}
                <Grid container spacing={4}>

                    {
                        blogs?.map((singleBlog, i) => <Grid item key={singleBlog._id} xs={12} md={4}><BlogCard index={i} {...singleBlog}></BlogCard></Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
};
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://stark-atoll-95180.herokuapp.com/blog')
    const blogs = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            blogs,
        },
    }
}
export default Blogs;