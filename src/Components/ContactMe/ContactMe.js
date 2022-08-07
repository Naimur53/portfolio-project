import { Container, Grid } from '@mui/material';
import React from 'react';
import CommentFrom from '../CommentFrom/CommentFrom';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';
import Image from 'next/image';
const ContactMe = () => {
    return (
        <motion.div initial={{ opacity: 0 }} exit={'initial'} animate={{ opacity: 1 }}>
            <Container className='py-5'>
                <Grid container spacing={4} className="md:flex-row flex-col-reverse">
                    <Grid item md={6} xs={12}>

                    </Grid>
                    <Grid item md={6} xs={12}>
                        <div className='hidden md:flex '>
                            <Image width={400} height={200} layout='raw' src="https://i.ibb.co/kMjgnHb/huisstijl-JBP-500.png" alt='logo'></Image>
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <div className="h-full flex justify-center items-center">

                            <ContactForm></ContactForm>
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12} className='font-family-Helvetica text-subTitles  '>
                        <div>

                            <span className=' block '>I would love to hear from you!</span>
                            <h2 className='text-4xl md:text-6xl font-thin text-gray-100  my-2 md:my-5 font-family-Helvetica    '>Contact Me</h2>
                            <p>In 1977, I became a professional. I have always chosen my own path. From journalistic photography to photography for advertising and industry and later that social anthropological subjects of today. I realize that I am an all rounder sometimes called the dinosaur among photographers. I see it as an honorary title.

                            </p>
                            <p className='mt-5 hidden md:block'>
                                Tell me what I can do for you. Maybe it will suit me and we will go down a road together.
                            </p>
                        </div>

                    </Grid>

                </Grid>
            </Container>
        </motion.div>
    );
};

export default ContactMe;