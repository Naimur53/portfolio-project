import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../src/Layouts/DashboardLayout';

const ChooseDropdown = () => {
    const [allCategory, setAllCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:5000/category?short=true')
            .then(res => {
                setAllCategory(res.data)
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <div className=' flex justify-center items-center'>
            <CircularProgress color='inherit'></CircularProgress>
        </div>

    }

    return (
        <div>

        </div>
    );
};
ChooseDropdown.Layout = DashboardLayout;
export default ChooseDropdown;