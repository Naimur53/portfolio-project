import DashboardLayout from "../../src/Layouts/DashboardLayout";
import { useForm } from "react-hook-form";
import { CircularProgress, Grid, TextField, Tooltip } from "@mui/material";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { toast } from 'react-toastify';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { allData } from "../../src/dataSlice/dataSlice";
const AddCategory = ({ uniqCategory }) => {
    const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();
    const [thumbnailLoading, setThumbnailLoading] = useState(false);
    const [imgLoading, setImgLoading] = useState(false);
    const { user } = useSelector(allData);
    const [inputValue, setInputValue] = useState('');
    console.log(watch('categoryName'));
    const onSubmit = data => {
        if (inputValue === 'new' && uniqCategory.includes(data.categoryName)) {
            toast.error('Choose a uniq category name', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        if (inputValue === 'new') {
            delete data.subCategory
        }
        console.log(data);
        if (!data.thumbnail) {
            toast.error('Thumbnail image not found', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        if (!data?.photos?.length) {
            toast.error('Please choose images for category', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }

        // sending to api
        axios.post('https://stark-atoll-95180.herokuapp.com/category', { mainData: data, user: user?.email }, {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('idToken')
            },
        })
            .then(res => {
                console.log(res, 'success');
                toast.success('Category successfully added', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(err => {
                console.log(err);
                if (e.response?.data?.error === 'UnAuthorize') {

                    toast.error('UnAuthorize try to reload or re-login to the site ' + e.message, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    toast.error('Something bad happened when add category' + e.message, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
        console.log(data);
        reset();


    }
    // handle multiple img upload 
    const handleChangeUrl = watch('url')
    console.log(handleChangeUrl)
    useEffect(() => {


    }, [handleChangeUrl, watch, setValue]);
    const photosUrls = () => {
        let bgUrl;
        if (watch('photos')?.length) {
            bgUrl = watch('photos').map(single => `url("${single.url}")`)
            return bgUrl.join(',')
        }
        console.log(bgUrl.join(','));
        return bgUrl;
    }
    //handle thumbnails image upload 

    const handleChange = (event) => {
        const value = event.target.value
        if (value === 'new') {
            setValue('categoryName', '')
        }
        else {
            setValue('categoryName', value)
        }
        setInputValue(value);
    };
    const handleThumbnailFile = e => {
        const file = e.target.files;
        console.log(file);
        if (file.length) {
            setThumbnailLoading(true)
            let body = new FormData()
            body.set('key', process.env.NEXT_PUBLIC_IMAGEBB_API)
            body.append('image', file[0]);
            axios({
                method: 'post',
                url: 'https://api.imgbb.com/1/upload',
                data: body
            })
                .then(res => {
                    console.log(res.data.data.url);
                    setValue('thumbnail', res.data.data.url)
                })
                .catch(e => {
                    setValue('thumbnailFile', []);
                    setValue('thumbnail', '');
                    console.log(e);
                    toast.error('Something bad happened to upload multiple image', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });

                })
                .finally(() => setThumbnailLoading(false))
        }

    }
    //photos upload
    const handlePhotosUpload = (e) => {
        const file = e.target.files
        console.log('file', file);
        if (file.length) {
            setImgLoading(true)
            const main = Object.values(file).map(singleFile => {
                console.log();
                let body = new FormData()
                body.set('key', process.env.NEXT_PUBLIC_IMAGEBB_API)
                body.append('image', singleFile)
                return axios({
                    method: 'post',
                    url: 'https://api.imgbb.com/1/upload',
                    data: body
                })
            })
            Promise.all(main).then(res => {
                console.log('all', res);
                const allUrl = res.map(singleRes => singleRes.data.data?.url)
                setValue('photos', allUrl);
                console.log('url', allUrl);
                setImgLoading(false);

            }).catch(e => {
                setValue('photos', []);
                setValue('url', [])
                console.log(e);
                toast.error('Something bad happened to upload multiple image', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setImgLoading(false);
            })
        }
    }

    return (
        <div>
            <h2 className="text-2xl text-white capitalize text-center my-5">Add a new category of your image</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  justify-center'>



                <Grid container spacing={4}>
                    <Grid xs={12} md={6} item>
                        {
                            inputValue !== 'new' ? <TextField
                                label='Choose Category'
                                id='choose-category'
                                className='w-full bg-gray-900 placeholder:text-white  focus:border-white focus:outline-none'
                                value={inputValue}
                                select
                                onChange={handleChange}
                                style={{ color: 'white' }}
                            >
                                <MenuItem value='new'>
                                    <em>Add new category</em>
                                </MenuItem>
                                {
                                    uniqCategory?.map(single => <MenuItem key={single} value={single} >{single}</MenuItem>)
                                }
                            </TextField> : <input className="w-full p-3 rounded-lg text-white  bg-gray-900 placeholder:text-slate-400" placeholder="Category Name"  {...register("categoryName", { required: true })} />
                        }

                    </Grid>

                    <Grid xs={12} md={6} item>

                        <input className="w-full p-3 rounded-lg text-white  bg-gray-900 placeholder:text-slate-400" placeholder="Title"  {...register("title", { required: true })} />

                    </Grid>
                    {
                        inputValue !== 'new' && <Grid xs={12} md={12} item>

                            <input className="w-full p-3 rounded-lg text-white  bg-gray-900 placeholder:text-slate-400" placeholder="Sub Category name"  {...register("subCategory", { required: true })} />

                        </Grid>
                    }
                    <Grid xs={12} md={6} item>
                        <Box
                            className='h-40 bg-gray-900 bg-center bg-cover flex justify-center items-center relative'
                            sx={{
                                backgroundImage: `url("${watch('thumbnail')}")`
                            }}
                        >
                            <input onChange={handleThumbnailFile} type="file" accept="image/*" id='thumbnailFile' className=" z-20 w-full h-full opacity-0" />
                            <div className="absolute inset-0 flex justify-center items-center">
                                {
                                    thumbnailLoading ? <CircularProgress sx={{ color: 'white' }} color="inherit"></CircularProgress> : <label htmlFor='thumbnailFile' className="bg-black/[.7] text-white p-2 rounded-md cursor-pointer">Choose Thumbnail</label>
                                }
                            </div>

                        </Box>

                    </Grid>
                    <Grid xs={12} md={6} item>
                        <Box
                            className={`h-40 relative dashboard-scrollBar  bg-gray-900 ${imgLoading ? "overflow-hidden" : "overflow-x-auto"}`}

                        >

                            <div className="absolute pointer-events-none inset-0 flex justify-center items-center ">
                                <input onChange={handlePhotosUpload} type="file" id='url' accept="image/*" className="z-50 pointer-events-auto h-full w-full opacity-0" multiple={true} />
                                <div className="absolute inset-0 flex justify-center items-center">
                                    {
                                        imgLoading ? <div className='z-10 w-full h-full flex justify-center items-center backdrop-blur-sm'> <CircularProgress sx={{ color: 'white' }} color="inherit"></CircularProgress></div> : watch('photos')?.length ? <div></div> : <label htmlFor='url' className="z-10 bg-black/[.7] text-white p-2  rounded-md pointer-events-auto cursor-pointer">Choose Images</label>
                                    }
                                </div>
                            </div>
                            <div className="pr-2">
                                {
                                    watch('photos')?.length ? <Grid container spacing={2}>
                                        <Grid item xs={3}  >
                                            <div className="p-1 h-full">
                                                <label htmlFor='url' className="flex justify-center items-center h-full w-full bg-black/[.7] p-2 text-white  rounded-md text-center pointer-events-none">
                                                    <div className='flex items-center flex-col '>
                                                        <Tooltip title="Change image" arrow>
                                                            <AddAPhotoIcon></AddAPhotoIcon>
                                                        </Tooltip>

                                                    </div>
                                                </label>
                                            </div>

                                        </Grid>
                                        {
                                            watch('photos')?.map((single) => <Grid item xs={3} key={url}><Image alt='gallery image' src={single} width={100} height={100}></Image></Grid>)
                                        }

                                    </Grid> : <div></div>
                                }
                            </div>

                        </Box>

                    </Grid>
                    <Grid xs={12} item>

                        <input className="w-full p-3 rounded-lg text-white  bg-gray-900 placeholder:text-slate-400" placeholder="Enter Short description"  {...register("description", { required: true })} />

                    </Grid>

                </Grid>


                {
                    !imgLoading && !thumbnailLoading ? <div className="mt-5">
                        <input className="bg-contentText cursor-pointer px-4 rounded-md text-black p-2" type="submit" />
                    </div> : <div className="mt-5">
                        <span className="bg-red-400 rounded-md text-black p-2"  >Loading Images</span>
                    </div>
                }

            </form>
        </div >
    );
};
AddCategory.Layout = DashboardLayout;
export default AddCategory;
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://stark-atoll-95180.herokuapp.com/uniqCategory`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { uniqCategory: data } }
}