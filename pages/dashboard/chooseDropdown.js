import { CircularProgress, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SelectMenuCard from '../../src/Components/SelectMenuCard/SelectMenuCard';
import DashboardLayout from '../../src/Layouts/DashboardLayout';
import { toast } from 'react-toastify';

const ChooseDropdown = () => {
    const [allCategory, setAllCategory] = useState([]);
    const [fullCategories, setFullCategories] = useState([]);
    const [beforeMenu, setBeforeMenu] = useState([]);
    const [num, setNum] = useState(0);
    const [selected, setSelected] = useState([]);
    const [loading, setLoading] = useState(true);
    const [postLoading, setPostLoading] = useState(false);
    useEffect(() => {
        // axios.get('https://stark-atoll-95180.herokuapp.com/category?short=true')
        //     .then(res => {
        //         const filterData = res.data?.filter(single => !single.subCategory)
        //         setAllCategory(filterData)
        //         setLoading(false)
        //     })
        Promise.all([axios.get('https://stark-atoll-95180.herokuapp.com/category?short=true'), axios.get(' https://stark-atoll-95180.herokuapp.com/chooseMenu')])
            .then(res => {
                console.log(res);
                const fullCategory = res[0].data;
                setFullCategories(fullCategory);
                const chooseData = res[1].data;
                console.log(fullCategory,);
                console.log(chooseData,);
                const filterCategory = fullCategory.filter(single => !single.subCategory)
                setAllCategory(filterCategory)
                setBeforeMenu(chooseData)
                setLoading(false)

            })
    }, [])
    if (loading) {
        return <div className=' flex justify-center items-center'>
            <CircularProgress color='inherit'></CircularProgress>
        </div>

    }
    const handleAdd = data => {
        console.log(data);
        setSelected([...selected, data])
    }
    const handleRemove = (data) => {
        console.log('remove', data);
        const without = selected.filter(single => single._id !== data._id)
        setSelected(without)
    }
    const addToNavigation = () => {
        if (selected.length) {
            setPostLoading(true)
            setSelected([])
            let mainData = [];
            selected.forEach(element => {
                const everyCategory = fullCategories.filter(single => single.categoryName === element.categoryName)
                let mainCategory = everyCategory.filter(single => !single.subCategory)[0]
                const withoutMainCategory = everyCategory.filter(single => single?.subCategory?.length)
                mainCategory.dropdown = withoutMainCategory;
                mainData = [...mainData, mainCategory]



            });
            console.log('mainCategory', mainData);
            axios.post('https://stark-atoll-95180.herokuapp.com/chooseMenu', mainData)
                .then(res => {
                    setPostLoading(false)

                    toast.success('Navigation successfully added', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
                .catch(res => {
                    setPostLoading(false)

                    toast.error('Failed to add Navigation', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })

        }
    }
    return (
        <>
            <div className='text-center mb-5'>
                <h2 className='text-2xl'>Choose Category</h2>
                <p>Select category to show on collection route</p>
            </div>
            <Grid container spacing={2}>
                {
                    allCategory.map(single => <Grid item md={4} xs={12} key={single._id}>
                        <SelectMenuCard selected={selected} handleAdd={handleAdd} handleRemove={handleRemove} {...single}></SelectMenuCard>
                    </Grid>)
                }
                <Grid item xs={12}>
                    {
                        postLoading ? <div className='flex justify-center'>
                            <CircularProgress color='inherit'></CircularProgress>
                        </div> : selected.length ? <button onClick={addToNavigation} className='w-full bg-yellow-400 p-2 text-black rounded-md '>Add To Navigation</button> : <div></div>
                    }
                </Grid>
            </Grid>
        </>
    );
};
ChooseDropdown.Layout = DashboardLayout;
export default ChooseDropdown;