import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const CategoryCard = ({ _id, thumbnail, title, description, categoryName, photos }) => {
    return (
        <Link href={"/" + _id}>
            <div>
                <div  >
                    <Image className='w-full h-auto' src={thumbnail} height={200} width={200} alt={title}></Image>
                </div>
                <motion.div className='bg-green-400' whileHover={{ scaleY: 2, scaleX: 3 }} initial='hidden' animate='visible' variants={{
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
                }}>
                    <h1 className='text-2xl'>{categoryName}</h1>
                    <h1 className='text-xl'>{title}</h1>
                    <h2>{description}</h2>
                </motion.div>
            </div>


        </Link>
    );
};

export default CategoryCard;