import { CircularProgress, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryCard from '../../src/Components/CategoryCard/CategoryCard';
import DashboardLayout from '../../src/Layouts/DashboardLayout';

const AllCategory = () => {
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:5000/category')
            .then(res => {
                setAllData(res.data)
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <div className='flex justify-center'>
            <CircularProgress color='inherit'></CircularProgress>
        </div>

    }
    console.log(allData);
    return (
        <Grid container spacing={2}>
            {
                allData.map(single => <Grid key={single._id} item xs={12} md={4}>
                    <CategoryCard {...single}></CategoryCard>

                </Grid>)
            }


        </Grid>
    );
};
AllCategory.Layout = DashboardLayout;
export default AllCategory;