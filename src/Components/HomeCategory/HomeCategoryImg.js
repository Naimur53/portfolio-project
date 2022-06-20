import { Link } from '@mui/material';
import { motion } from "framer-motion";

import Image from 'next/image';
import React from 'react';

const HomeCategoryImg = ({ mp, title, thumbnail, _id }) => {

    return (
        <Link href={'/category/' + _id} className='overflow-hidden block text-gray-50 transition duration-300 brightness-50 hover:no-underline no-underline hover:brightness-100 grayscale hover:grayscale-0  pb-20 w-full relative'>
            <div className='w-full h-full'>
                <motion.div
                    initial={{
                        x: 0,
                        y: 0,
                    }}
                    animate={{
                        x: mp.x / 20,
                        y: mp.y / 20,
                        transition: { ease: "easeOut", duration: 5 }
                    }}
                >
                    <Image priority width={200} height={200} layout={'raw'} src={thumbnail} className=' block w-full ' alt='Image' ></Image>

                </motion.div>
            </div>
            <div className=" pointer-events-none 	w-full">
                {title.slice(0, 40)}
            </div>
        </Link>
    );
};

export default HomeCategoryImg;