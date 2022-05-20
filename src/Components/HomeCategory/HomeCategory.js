import { useSelector } from 'react-redux';
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import { allData } from '../../dataSlice/dataSlice';
import { motion } from "framer-motion";
import { Container, Grid } from '@mui/material';
const HomeCategory = () => {
    const { homeCategory } = useSelector(allData)
    return (
        <Container>
            <Grid container spacing={10}>


                {
                    homeCategory?.map(single => <Grid key={single._id} item md={4}><CategoryCard {...single}></CategoryCard></Grid>)
                }

            </Grid>
        </Container>
    );
};


export default HomeCategory;