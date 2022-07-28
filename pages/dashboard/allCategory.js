import { CircularProgress, Grid } from '@mui/material';
import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryCard from '../../src/Components/CategoryCard/CategoryCard';
import DashboardLayout from '../../src/Layouts/DashboardLayout';
import fetcher from '../../src/util/fatcher';
import useSWR from "swr";
const AllCategory = () => {
    const [allData, setAlldata] = useState([])
    const { data, error } = useSWR(
        "https://stark-atoll-95180.herokuapp.com/category",
        fetcher
    );
    useEffect(() => {
        setAlldata(data)
    }, [data])
    if (!allData?.length) {
        return <div className='flex justify-center'>
            <CircularProgress sx={{ color: 'white' }}></CircularProgress>
        </div>

    }

    return (
        <div >

            <Grid container spacing={2}>
                {
                    allData.map((single, i) => <Grid key={single._id} item xs={12} md={4}>
                        <CategoryCard admin i={i} setAlldata={setAlldata} {...single}></CategoryCard>

                    </Grid>)
                }


            </Grid>
        </div>
    );
};
AllCategory.Layout = DashboardLayout;
export default AllCategory;