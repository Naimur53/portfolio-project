
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { Avatar, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { motion } from 'framer-motion'
import CustomLink from '../SmallComponents/CustomLink';

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
        <CustomLink href={`/blogs/${_id}`}>

            <motion.div variants={pop} initial='initial' exit='initial' animate='animate' className={`font-family-mono blog-single-card-wrap ${loading ? 'grayscale' : ''}`}>
                <div data-aos="fade-up">
                    <div className='flex flex-col  '>
                        <div className='relative'>

                            {
                                img && <Image height={314} width={230} layout="raw"
                                    className='w-full' src={img} alt={heading} />
                            }
                            <div className='absolute bg-black top-0 px-3 py-1 mt-3'>
                                <h2 className='text-subTitles py-0 '>{address}</h2>
                            </div>
                        </div>
                        <div>
                            <span className=' pt-2 text-contentText  flex items-center'><EventAvailableIcon fontSize='small'></EventAvailableIcon><span className='ml-2  text-[16px]'>{new Date(date).toDateString()}</span></span>

                            <span className='uppercase cursor-pointer title text-xl text-heading font-family-mono  hover:text-white'>{heading}</span>
                        </div>
                    </div>
                    {
                        admin && <div>
                            {
                                !loading && <button onClick={() => handleDelete(_id, setLoading)} className='bg-red-500 mt-5 p-2 rounded-md px-5'>Delete</button>
                            }
                        </div>
                    }


                </div>
            </motion.div>
        </CustomLink>
    );
};

export default BlogCard;