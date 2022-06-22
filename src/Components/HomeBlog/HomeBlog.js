import { Container, Grid } from '@mui/material';
import React from 'react';
import MgButton from '../SmallComponents/MgButton';
import HomeBlogImages from './HomeBlogImages';

const HomeBlog = () => {
    return (
        <Container maxWidth="xl" className='h-full font-roboto px-14 overflow-hidden '>
            <Grid container spacing={4} className='h-full'>
                <Grid item md={5} className='h-full flex justify-center items-center  '>
                    <div className=''>
                        <h2 className='relative  font-family-allerta font-semibold z-10 text-5xl  text-gray-300 '>Photography Story</h2>
                        <p className='text-gray-300 mt-5   w-4/5'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt facilis odio voluptatibus, inventore, voluptatem odit non veniam qui, magnam distinctio aut! Laborum maiores quod soluta harum enim ducimus, alias molestias!
                        </p>
                        <div className='inline-block my-5 text-xl '  >
                            <MgButton text='Read my Blogs'> </MgButton>
                        </div>

                    </div>

                </Grid>
                <Grid className='h-full  ' item md={7}>
                    <HomeBlogImages></HomeBlogImages>
                </Grid>

            </Grid>
        </Container>
    );
};

export default HomeBlog;