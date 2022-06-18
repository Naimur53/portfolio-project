import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const CategoryLayout = ({ photos }) => {
    return (
        <div className='py-5  '>
            <Grid container spacing={2} >
                <Grid item md={4}>
                    <Image className='w-full h-full ' priority layout='raw' src={photos[0]} height={200} width={200} alt='photo'></Image>
                </Grid>
                <Grid item md={4}>
                    <Image className='w-full ' priority layout='raw' src={photos[0]} height={400} width={200} alt='photo'></Image>
                </Grid>
                <Grid item md={4}>
                    <Image className='w-full ' priority layout='raw' src={photos[0]} height={400} width={200} alt='photo'></Image>
                </Grid>


            </Grid>

        </div>
    );
};

export default CategoryLayout;