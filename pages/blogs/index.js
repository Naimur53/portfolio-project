import React from 'react';
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import BlogLeft from '../../src/Components/BlogLeft/BlogLeft';
import BlogCard from '../../src/Components/BlogCard/BlogCard';
import { Head } from '../../src/Components/Head/Head';
const Blogs = ({ blogs }) => {
    console.log(blogs);
    return (

        <div >
            <Head title='Blog'></Head>
            <div
                style={
                    {
                        background: `linear-gradient(to bottom,  rgba(0,0,0,0.6) 0%,rgba(19,19,19,1) 100%),url('https://demo.themetorium.net/html/agatha/dark/assets/img/headings/heading-10.jpg')`,
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
                    <h1 className='text-3xl text-center font-family-mono'>Writing my blog has saved me thousands on therapy</h1>
                    <div className="flex  justify-center mt-3">
                        <div className='w-52 flex justify-between'>
                            <span>Home</span>
                            <span>/</span>
                            <span>Blogs</span>
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