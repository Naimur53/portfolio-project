import { Container, Grid } from '@mui/material';
import React from 'react';

const AboutQuote = () => {
    const qoutes = ['Photography is a profession.Not everyone with a camera is a photographer.', 'It is not the camera that takes the photo, it is the vision of the person behind the camera.', 'Take the photo that you had in mind.The real photographer doesn’t like lucky shots.', 'Today’s shot is better than the one yesterday.That’s why i love tomorrow']
    return (
        <div className='overflow-hidden h-full glass-bg  '>
            <Container>
                <div className='py-10 mb-5 text-center'>
                    {/* <DescriptionText text=""></DescriptionText> */}
                    <h1 className='text-4xl font-family-allerta'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit</h1>
                    <h2 className='text-xl font-thin mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta tempora nobis non quaerat autem.  </h2>
                </div>
                <Grid container spacing={4} className=' '>
                    {
                        qoutes.map((single, i) => <Grid key={i} item xs={12} md={6}>
                            <div className='bg-gra   h-full font-thin text-2xl font-family-mono border border-gradient border-gray-800 rounded-md  p-5'>
                                <blockquote>{single}</blockquote>
                            </div>

                        </Grid>)
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default AboutQuote;