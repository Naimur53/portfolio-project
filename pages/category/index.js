import { Container, Grid } from '@mui/material';
import React from 'react';
import CategoryBanner from '../../src/Components/CategoryBanner/CategoryBanner';
import CategoryCard from '../../src/Components/CategoryCard/CategoryCard';

const AllCategory = ({ data }) => {
    return (
        <>
            <CategoryBanner></CategoryBanner>

            <Container>
                <div className='text-center mb-5'>
                    <h2 className='font-family-allerta mb-3 text-4xl'>May I asked you to take time</h2>
                    <p>I have taken the time to take my photos. I did it with passion and endless patience. May I also ask you to take the time to look at my work. Preferably not on your smart phone but if it can’t be otherwise … Try to become one with the image and feel what happened when I took the photo.</p>
                </div>
                <Grid container spacing={2}>
                    {
                        data.map((single, i) => <Grid item md={6} lg={3} xs={12} key={single._id}>
                            <CategoryCard i={i} {...single}></CategoryCard>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default AllCategory;
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:5000/category?normal=true`)
    const data = await res.json()
    console.log('server', res);

    // Pass data to the page via props
    return { props: { data } }
} 