import { Box } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion'
const CategoryBanner = () => {
    return (
        <Box className='flex justify-center relative  bg-center pb-5 mt-10 '>
            <div className='bg-black overflow-hidden text-center inline-block   wrap '>
                <Box sx={{ fontSize: { md: "200px", xs: '70px' } }} className='word relative font-bold'>GALLERY

                    <div className="absolute inset-0 ">
                        <div className='over rounded-full relative w-36 h-36 '></div>
                    </div>
                </Box>


            </div>


        </Box>
    );
};

export default CategoryBanner;