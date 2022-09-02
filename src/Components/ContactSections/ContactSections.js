import React from 'react';
import { allData } from '../../dataSlice/dataSlice';
import { useSelector } from 'react-redux';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../AboutPages/Footer';
import { Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSections = () => {
    const { scrollValue } = useSelector(allData)

    return (
        <div>
            <AnimatePresence>

                {
                    !(scrollValue >= 4.5) ? <ContactMe></ContactMe> : <Container>
                        <motion.div initial={{ opacity: 0 }} exit={'initial'} animate={{ opacity: 1 }}>

                            <Footer></Footer>
                        </motion.div>

                    </Container>
                }
            </AnimatePresence>
        </div>
    );
};

export default ContactSections;