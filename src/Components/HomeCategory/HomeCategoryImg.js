
import { motion } from "framer-motion";

import Image from 'next/image';
import React from 'react';
import CustomLink from "../SmallComponents/CustomLink";

const HomeCategoryImg = ({ mp, title, thumbnail, _id }) => {

    return (
        <CustomLink href={'/category/' + _id} >
            <div className='overflow-hidden block text-gray-50 transition duration-300 brightness-50 hover:no-underline no-underline hover:brightness-100 grayscale hover:grayscale-0  pb-20 w-full relative cursor-pointer'>

                <div className='overflow-hidden w-full h-full'>
                    <motion.div
                        initial={{
                            x: 0,
                            y: 0,
                            scale: 1.5,
                        }}
                        animate={{
                            x: mp.x / 10,
                            y: mp.y / 10,
                            scale: 1.5,

                            transition: { ease: "easeOut", duration: 3 }
                        }}
                    >
                        <Image priority width={200} height={200} layout={'raw'} src={thumbnail} className=' block w-full ' alt='Image' ></Image>

                    </motion.div>
                </div>
                <div className=" pointer-events-none 	w-full">
                    <h1 className="uppercase">{title.slice(0, 40)}</h1>
                </div>
            </div>
        </CustomLink>
    );
};

export default HomeCategoryImg;