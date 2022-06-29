import { Box } from '@mui/material';
import React from 'react';

const CategoryBanner = () => {
    return (
        <Box className='  bg-center py-5'>
            <div style={{ background: '#0000009a' }} className=' 	'>
                <div className=' text-center   '>
                    <Box sx={{ fontSize: { md: "200px", xs: '70px' } }} className='leading-none letter  font-bold'>GALLERY</Box>

                </div>

            </div>
        </Box>
    );
};

export default CategoryBanner;