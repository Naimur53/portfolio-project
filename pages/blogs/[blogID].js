import { Container, Grid } from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import BlogLeft from '../../src/Components/BlogLeft/BlogLeft';
import BlogRight from '../../src/Components/BlogRight/BlogRight';

const SingleBlog = () => {
    return (
        <div pages={4} >
            <div
                style={
                    {
                        background: `linear-gradient(to bottom,  rgba(0,0,0,0.6) 0%,rgba(19,19,19,1) 100%),url('https://demo.themetorium.net/html/agatha/dark/assets/img/headings/heading-10.jpg')`,
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '60vh',
                    }
                }
            >
                <div className=' '>
                    <h1 className='text-3xl'>THE TRUTH ABOUT PHOTOGRAPHY</h1>
                    <div className="flex justify-center mt-3">
                        <div className='w-2/3  flex justify-between'>
                            <span>Home</span>
                            <span>/</span>
                            <span>Blogs</span>
                            <span>/</span>
                            <span>THE TRUTH ABOUT..</span>

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