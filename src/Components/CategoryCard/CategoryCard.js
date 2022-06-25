import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const CategoryCard = ({ _id, thumbnail, title, description, categoryName, photos }) => {
    const [loading, setLoading] = useState(false);
    const handleDelete = () => {
        if (window.confirm()) {
            setLoading(true);
            axios.delete(`http://localhost:5000/category?id=${_id}`)
                .then(res => {
                    setLoading(false)
                })

        }
    }
    return (
        <motion.div className={loading ? 'grayscale' : ''} exit='hidden' initial='hidden' animate='visible' variants={{
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
            <div className="category-card-wrap">
                <Link href={'/category/' + _id}>
                    <div>
                        <div  >
                            <Image className='w-full cursor-pointer category-card-img h-auto' src={thumbnail} height={400} width={400} alt={title}></Image>
                        </div>
                        <div className=' ' >
                            <h1 className='text-2xl font-family-allerta '>{categoryName}</h1>
                            <h1 >{title}</h1>
                        </div>

                    </div>
                </Link>
                <div>
                    {loading ? <CircularProgress /> : <button onClick={() => handleDelete()} className='bg-red-900 px-5 py-2 mt-2 rounded'>Delete</button>}
                </div>
            </div>
        </motion.div>
    );
};

export default CategoryCard;