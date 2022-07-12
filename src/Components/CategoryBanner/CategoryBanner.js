import { Box } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion'
const CategoryBanner = () => {
    return (
        <Box className='  bg-center py-5 mt-10 md:mt-0'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ background: '#0000009a' }} className=' 	'>
                <div className=' text-center   '>
                    <Box sx={{ fontSize: { md: "200px", xs: '70px' } }} className='leading-none letter  font-bold'>GALLERY</Box>

                </div>

            </motion.div>
        </Box>
    );
};

export default CategoryBanner;