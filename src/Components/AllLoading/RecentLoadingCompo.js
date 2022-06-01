import { Box, Skeleton } from '@mui/material';
import React from 'react';

const RecentLoadingCompo = () => {
    return (
        <div className='flex mb-5'>
            <Skeleton width={80} height={80} variant="circular" sx={{ bgcolor: '#4b536f57' }} animation="wave" />

            <div className='px-3'>

                <Skeleton width={200} height={40} sx={{ bgcolor: '#4b536f57' }} animation="wave" />
                <Skeleton width={200} height={20} sx={{ bgcolor: '#4b536f57' }} animation="wave" />
                <Skeleton width={150} height={20} sx={{ bgcolor: '#4b536f57' }} animation="wave" />
            </div>

        </div>
    );
};

export default RecentLoadingCompo;