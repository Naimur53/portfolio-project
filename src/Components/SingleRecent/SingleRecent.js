import { Avatar, Grid } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'

const SingleRecent = ({ data, index }) => {
    const pop = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,

            transition: { delay: index * .5 }
        }
    }
    return (
        <Link href={`/blogs/${data._id}`}>
            <motion.div variants={pop} initial='initial' exit='initial' animate='animate' className='pr-3 cursor-pointer'>
                <div className='pb-5 flex mt-5'>
                    <div className='mr-4'>
                        <Avatar src={data.img} alt="blog " sx={{
                            width: 60, height: 60
                        }}></Avatar>
                    </div>
                    <div className='font-family-mono'>
                        <h1 className='text-sm   text-gray-300'>{data.heading}</h1>
                        <h1 className='text-sm  text-gray-400'>Malysiha Bankok</h1>
                        <h3 className='font-light text-xs text-gray-400'>{new Date(data.date).toDateString()}</h3>
                    </div>
                </div>
                <hr className='border-gray-800' />
            </motion.div>
        </Link>
    );
};

export default SingleRecent;