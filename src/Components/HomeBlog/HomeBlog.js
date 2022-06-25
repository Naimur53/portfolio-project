import { Container, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import MainHeading from '../SmallComponents/MainHeading';
import MgButton from '../SmallComponents/MgButton';
import HomeBlogImages from './HomeBlogImages';

const HomeBlog = () => {
    const route = useRouter();
    const handleClick = () => {
        route.push('/blogs')

    }
    return (
        <Container maxWidth="xl" className='h-full font-roboto md:px-14 overflow-hidden '>
            <Grid container spacing={4} className='h-full'>
                <Grid item xs={12} md={5} className=' h-1/2 md:h-full relative flex md:justify-center items-center  '>
                    <div>
                        <h2 className='mt-5 font-family-allerta  text-4xl md:text-5xl  text-yellow-300 '>Photography Story</h2>
                        <p className='text-gray-300 mt-5 w-full  md:w-4/5'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt facilis odio voluptatibus, inventore, voluptatem odit non veniam qui, magnam distinctio aut! Laborum maiores quod soluta harum enim ducimus, alias molestias!
                        </p>
                        <div className='inline-block my-5 text-xl '  >
                            <MgButton buttonProps={{ onClick: () => handleClick() }} text='See All Blogs'> </MgButton>
                        </div>

                    </div>
                    <div className=' absolute z-10 pointer-events-none inset-0 flex items-end  md:hidden'>
                        <div className='p-2 bg-black w-full phone-shadow'></div>
                    </div>
                </Grid>
                <Grid className='h-1/2 md:h-full   overflow-hidden md:overflow-visible' item xs={12} md={7}>
                    <HomeBlogImages></HomeBlogImages>
                </Grid>

            </Grid>
        </Container>
    );
};

export default HomeBlog;