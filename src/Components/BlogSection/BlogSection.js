import Image from 'next/image';
import React from 'react';

const BlogSection = ({ data }) => {
    return (
        <div className='mt-10'>
            <Image src={data.img[0].url} height={618} width={1060} alt='d'></Image>
            <em>{data.img[0].title}</em>
            <div className='mt-5'>
                <h1 className='text-4xl mb-2'>{data.title}</h1>
                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default BlogSection;