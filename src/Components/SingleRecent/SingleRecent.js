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
                        <h1 className='text-sm   text-heading'>{data.heading}</h1>
                        <h2 className='text-sm my-1 text-subTitles'>Malysiha Bankok</h2>
                        <h3 className='text-xs text-contentText'>{new Date(data.date).toDateString()}</h3>
                    </div>
                </div>
                <hr className='border-gray-800' />
            </motion.div>
        </Link>
    );
};

export default SingleRecent;