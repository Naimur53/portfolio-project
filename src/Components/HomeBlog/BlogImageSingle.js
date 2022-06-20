import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogImageSingle = ({ img, heading, _id }) => {
    return (
        <Link href={'/blogs/' + _id} >
            <div className='  pb-10  '>

                <Image className='rounded-xl  ' src={img} width={400} height={500} alt='Blog Image'></Image>
                <div >
                    <p className='capitalize '>
                        {heading.slice(0, 35)}
                    </p>

                </div>
            </div>
        </Link>
    );
};

export default BlogImageSingle;