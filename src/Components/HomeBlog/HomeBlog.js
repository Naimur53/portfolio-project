import { Container, Grid } from '@mui/material';
import React from 'react';
import HomeBlogImages from './HomeBlogImages';

const HomeBlog = () => {
    return (
        <Container maxWidth="xl" className='h-full px-14 overflow-hidden '>
            <Grid container spacing={4} className='h-full'>
                <Grid item md={5} className='h-full   '>
                    <div className='mt-14'>
                        <h2 className='relative  z-10 text-6xl font-sans text-gray-300 '>Photography Story</h2>
                        <p className='text-gray-300 mt-10   w-4/5'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt facilis odio voluptatibus, inventore, voluptatem odit non veniam qui, magnam distinctio aut! Laborum maiores quod soluta harum enim ducimus, alias molestias!
                        </p>
                        <h2 className='text-gray-300 text-xl mt-10'>
                            #Lorem ipsum
                        </h2>
                        <h2 className='text-gray-300 text-xl mt-2'>
                            #Traveling
                        </h2>
                        <h2 className='text-gray-300 text-xl mt-2 '>
                            #Traveling
                        </h2>

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