import React from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import { motion } from 'framer-motion'
const BlogPageBanner = (props) => {
    const { blogDetails } = useSelector(allData)
    return (
        <div
            className='mt-20'
        // style={
        //     {
        //         background: `linear-gradient(to bottom,  rgba(0,0,0,0.3) 0%,rgba(19,19,19,1) 100%),url(${props.default ? "https://demo.themetorium.net/html/agatha/dark/assets/img/headings/heading-10.jpg" : blogDetails.img})`,
        //         backgroundPosition: 'center',
        //         backgroundSize: 'cover',
        //         backgroundAttachment: 'fixed',
        //         display: 'flex',
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         height: '100vh',
        //     }
        // }
        >
            {
                <div className='overflow-hidden'>
                    <div className='overflow-hidden'>
                        {
                            props.default ? <motion.h1
                                exit={{
                                    y: '100%'
                                }}
                                initial={{
                                    y: '100%'
                                }}
                                animate={{
                                    y: 0,
                                    transition: { duration: .7, }
                                }} className='text-xl md:text-3xl text-center font-family-mono font-thin'>
                                Funny stories, serious experience, <br />
                                photographic topics, <br />
                                you can find them all on my blog page.
                            </motion.h1> : <motion.h1
                                exit={{
                                    y: '100%'
                                }}
                                initial={{
                                    y: '100%'
                                }}
                                animate={{
                                    y: 0,
                                    transition: { duration: .7, }
                                }} className='text-xl md:text-3xl text-center font-family-mono font-thin'>
                                {
                                    blogDetails.heading
                                }
                            </motion.h1>
                        }

                    </div>
                </div>
            }



        </div>
    );
};

export default BlogPageBanner;