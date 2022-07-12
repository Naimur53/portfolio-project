
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { Avatar, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { motion } from 'framer-motion'

const BlogCard = ({ _id, heading, index, description, img, love, comment, date, address, admin, handleDelete }) => {
    const pop = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,

            transition: { delay: index * .2 }
        }
    }
    const [loading, setLoading] = useState(false);
    return (
        <motion.div variants={pop} initial='initial' exit='initial' animate='animate' className={`font-family-mono ${loading ? 'grayscale' : ''}`}>
            <div data-aos="fade-up">
                <div className='flex flex-col  '>
                    <div className='relative'>
                        <Image height={314} width={230} src={img} alt={heading} />
                        <div className='absolute bg-black top-0 px-3 py-1 mt-3'>
                            <h2 className='text-white py-0 '>{address}</h2>
                        </div>
                    </div>
                    <div>
                        <small className=' pt-2 font-light text-gray-400 flex items-center'><EventAvailableIcon fontSize='small'></EventAvailableIcon><span className='ml-2 italic  text-[16px]'>{new Date(date).toDateString()}</span></small>

                        <Link href={`/blogs/${_id}`} ><span className='uppercase cursor-pointer title text-2xl text-gray-300 font-family-mono font-semibold'>{heading}</span></Link>
                    </div>
                </div>
                {
                    admin && <div>
                        {
                            !loading && <button onClick={() => handleDelete(_id, setLoading)} className='bg-red-500 p-2 rounded-md px-5'>Delete</button>
                        }
                    </div>
                }


            </div>
        </motion.div>
    );
};

export default BlogCard;