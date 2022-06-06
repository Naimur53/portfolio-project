import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import CategorySlider from '../CategorySlider/CategorySlider';

const AboutMe = () => {
    const { homeCategory } = useSelector(allData)
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
                <Box
                    className="w-full bg-red-400 bg-cover bg-center grayscale"
                    sx={{
                        background: 'url(https://i.ibb.co/njLJtgJ/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964.jpg)',
                        height: '60vh'
                    }}

                >

                </Box>
            </Grid>
            <Grid item xs={6} md={6}>
                <div className='h-full px-10 bg-gray-900'>
                    <h1 className='text-2xl text-justify pt-5'>About Me</h1>
                    <hr className='w-10 mt-5' />
                    <p className='mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sit tempore repellat? Aliquid sequi laborum a dolore adipisci provident quam harum error deserunt consequuntur excepturi recusandae sint, similique doloremque voluptatum!</p>
                    <p className='mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sit tempore repellat? Aliquid sequi laborum a dolore adipisci provident quam harum error deserunt consequuntur excepturi recusandae sint, similique doloremque voluptatum!</p>
                    <button className='mt-5  border-b'>Hire me &gt;</button>

                </div>
            </Grid>



        </Grid>
    );
};

export default AboutMe;