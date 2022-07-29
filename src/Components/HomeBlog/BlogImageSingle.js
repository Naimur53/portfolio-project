import Image from 'next/image';
import React from 'react';
import CustomLink from '../SmallComponents/CustomLink';

const BlogImageSingle = ({ img, heading, _id }) => {
    return (
        <CustomLink href={'/blogs/' + _id} passHref >
            <div className='  pb-10  '>

                <Image className='rounded-xl  ' src={img} width={400} layout='raw' height={500} alt='Blog Image'></Image>
                <div >
                    <p className='capitalize font-family-Helvetica text-gray-300'>
                        {heading.slice(0, 35)}
                    </p>

                </div>
            </div>
        </CustomLink>
    );
};

export default BlogImageSingle;