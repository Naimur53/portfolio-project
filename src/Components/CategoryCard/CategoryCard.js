import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const CategoryCard = ({ _id, thumbnail, title, description, categoryName, photos }) => {
    return (
        <Link href={"/" + _id}>
            <motion.div exit='hidden' initial='hidden' animate='visible' variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },

                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: .4
                    }
                }
            }} >
                <div  >
                    <Image className='w-full h-auto' src={thumbnail} height={400} width={400} alt={title}></Image>
                </div>
                <div className=' ' >
                    <h1 className='text-2xl'>{categoryName}</h1>
                    <h1 className='text-xl'>{title}</h1>
                    <h2>{description}</h2>
                </div>
            </motion.div>


        </Link>
    );
};

export default CategoryCard;