
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Avatar, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const BlogCard = ({ _id, heading, description, img, love, comment, date, address }) => {
    return (
        <div>
            <div data-aos="fade-up">
                <div className='flex flex-col'>
                    <div className='relative'>
                        <Image height={314} width={230} src={img} alt={heading} />
                        <div className='absolute bg-black top-0 px-3 py-1 mt-3'>
                            <h2 className='text-white py-0'>{address}</h2>
                        </div>
                    </div>
                    <div>
                        <small className=' pt-2 text-gray-600 flex items-center'><EventAvailableIcon fontSize='small'></EventAvailableIcon><span className='ml-2 italic  text-[16px]'>{new Date(date).toDateString()}</span></small>

                        <Link href={`/blogs/${_id}`} ><span className='uppercase cursor-pointer title text-2xl font-osw font-semibold'>{heading}</span></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogCard;