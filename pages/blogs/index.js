import React from 'react';
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import BlogLeft from '../../src/Components/BlogLeft/BlogLeft';
import BlogCard from '../../src/Components/BlogCard/BlogCard';
import { Head } from '../../src/Components/Head/Head';
import BlogPageBanner from '../../src/Components/BlogPageBanner/BlogPageBanner';
const Blogs = ({ blogs }) => {
    console.log(blogs);
    return (

        <div >
            <Head title='John Blogs'></Head>
            <BlogPageBanner default></BlogPageBanner>
            <Container maxWidth='lg' className='bg-transparent-black   py-10'>
                <Grid container spacing={2}>
                    <Grid xs={4}>
                        <BlogLeft></BlogLeft>
                    </Grid>
                    <Grid xs={8}>
                        <Grid container spacing={4}>
                            {
                                blogs?.map(singleBlog => <Grid item key={singleBlog._id} xs={12} md={4}><BlogCard  {...singleBlog}></BlogCard></Grid>)
                            }
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:5000/blog')
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