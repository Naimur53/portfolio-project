import { Container, Grid } from '@mui/material';
import React from 'react';
import CommentFrom from '../CommentFrom/CommentFrom';
import ContactForm from './ContactForm';

const ContactMe = () => {
    return (
        <Container className='py-5'>
            <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                    <ContactForm></ContactForm>
                </Grid>
                <Grid item md={6} xs={12}>
                    <span>I would love to hear from you!</span>
                    <h2 className='text-6xl my-5 font-family-allerta  text-yellow-400'>Contact Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi laudantium sint quos autem voluptatum iste, eius illum a, excepturi dolorum velit dolores vitae, laborum molestiae dolore possimus natus ipsum?</p>
                    <p className='mt-5'>
                        sit amet consectetur adipisicing elit. Tempore commodi laudantium sint quos autem voluptatum iste, eius illum a, excepturi dolorum velit dolores vitae, laborum molestiae dolore possimus natus ipsum?
                    </p>

                </Grid>

            </Grid>
        </Container>
    );
};

export default ContactMe;