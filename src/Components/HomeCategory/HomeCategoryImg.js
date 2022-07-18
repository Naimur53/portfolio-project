
import { motion } from "framer-motion";

import Image from 'next/image';
import React from 'react';
import CustomLink from "../SmallComponents/CustomLink";

const HomeCategoryImg = ({ mp, title, categoryName, subCategory, thumbnail, _id }) => {

    return (
        <CustomLink href={'/category/' + _id} >
            <div className='overflow-hidden block text-gray-50 transition duration-300 homecate-card hover:no-underline no-underline hover:brightness-100 grayscale hover:grayscale-0  pb-20 w-full relative cursor-pointer'>

                <div className='overflow-hidden w-full h-full'>
                    <div
                    >
                        <Image priority width={200} height={200} layout={'raw'} src={thumbnail} className=' block w-full ' alt='Image' ></Image>

                    </div>
                </div>
                <div className="absolute inset-0">
                    <div className='bg-black mt-2 inline-block  p-2'>
                        <h1 className='    font-family-Helvetica  text-heading font-thin tracking-widest'>{categoryName} {subCategory && <span>- {subCategory}</span>}</h1>
                    </div>
                </div>
            </div>
        </CustomLink>
    );
};

export default HomeCategoryImg;