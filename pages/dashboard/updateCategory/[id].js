import { useRouter } from 'next/router';
import React, { useState } from 'react';
import DashboardLayout from '../../../src/Layouts/DashboardLayout';
import fetcher from '../../../src/util/fatcher';
import useSWR from 'swr';
import { CircularProgress, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import UpadateImage from '../../../src/Components/UpadateImage/UpadateImage';
import CategorySingleImg from '../../../src/Components/CategorySingleImg/CategorySingleImg';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import axios from 'axios';
import { allData } from '../../../src/dataSlice/dataSlice';
const UpdateCategory = () => {
    const { query: { id } } = useRouter();
    const [thumbnailLoading, setThumbnailLoading] = useState(false);
    const [uploadLoading, setUploadLoading] = useState(false);
    const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();
    const { user } = useSelector(allData)
    const [selected, setSelected] = useState([]);
    const [imgLoading, setImgLoading] = useState(false);
    const [data, setData] = useState({})
    const { data: res, error } = useSWR(
        `https://stark-atoll-95180.herokuapp.com/singleCategory?id=${id}`,
        fetcher
    );
    useEffect(() => {
        setData(res)
    }, [res])
    if (!data?._id) {
        return <div className='flex justify-center'>
            <CircularProgress sx={{ color: 'white' }}></CircularProgress>
        </div>
    }
    const handlePhotosUpload = (e) => {
        const file = e.target.files;
        if (file.length) {
            setImgLoading(true)
            const main = Object.values(file).map(singleFile => {

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

                const allUrl = res.map(singleRes => singleRes.data.data?.url)
                setData({
                    ...data,
                    photos: [...data.photos, ...allUrl]
                })
                setImgLoading(false);

            }).catch(e => {
                setValue('photos', []);
                setValue('url', [])

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
    const handleDelete = () => {
        const remain = data?.photos.filter(single => !(selected.find(select => select === single)))

        setSelected([])
        setData({
            ...data, photos: remain,
        })
    }

    const handleThumbnailFile = e => {
        const file = e.target.files;

        if (file.length) {
            setThumbnailLoading(true)
            let body = new FormData()
            body.set('key', process.env.NEXT_PUBLIC_IMAGEBB_API)
            body.append('image', file[0]);
            axios({
                method: 'post',
                url: 'https://stark-atoll-95180.herokuapp.com/uplaodImage',
                data: body
            })
                .then(res => {

                    setData({
                        ...data, thumbnail: res?.data?.data?.url
                    })
                    setThumbnailLoading(false)
                })
                .catch(e => {

                    toast.error('Something bad happened to upload image massage is ' + e.message, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setThumbnailLoading(false)
                })
        }

    }
    const onSubmit = editData => {
        setUploadLoading(true)
        const upData = {
            ...data, description: editData.description, title: editData.title
        }
        delete upData._id;

        axios.put(`https://stark-atoll-95180.herokuapp.com/category?id=${data._id}`, { mainData: upData, user: user.email }, {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('idToken')
            },
        })
            .then(res => {
                setUploadLoading(false)
                toast.success(' Successfully Updated', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

            })
            .catch(e => {
                setUploadLoading(false)

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
                    toast.error('Something bad happened when post the blog' + e.message, {
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


    }
    const createArray = len => {
        const demo = Array.from(Array(len).keys());

        let myArray = [];
        const findNum = (num) => {
            if (myArray.indexOf(num) !== -1) {
                // alert("Yes, the value exists!")
                const random = Math.floor(Math.random() * len + 1);
                return findNum(random)
            }
            else {
                // alert("No, the value is absent.")
                return num;
            }

        }
        demo.forEach(element => {
            const randomNum = Math.floor(Math.random() * len + 1);
            const num = findNum(randomNum)
            myArray = [...myArray, num];

        })

        const mixedUpArray = [];
        myArray.forEach((ele, i) => {
            mixedUpArray[i] = data?.photos[ele - 1];
        })

        return mixedUpArray;
    }
    const changeLayout = () => {
        const getNewArray = createArray(data?.photos.length)
        setData(pre => {
            return {
                ...pre,
                photos: getNewArray

            }
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div
                    className='bg-cover relative mb-5'
                    style={{
                        height: '50vh',
                        backgroundImage: `url(${data.thumbnail})`
                    }}>
                    <div className='absolute inset-0 flex justify-center items-center flex-col'>
                        <h2
                            className='text-4xl font-family-Helvetica text-center '>

                            {
                                data.subCategory ? <span>{data.categoryName} - {data.subCategory}</span> : <span>{data.categoryName}</span>
                            }

                        </h2>
                        {
                            thumbnailLoading ? <CircularProgress sx={{ color: 'white' }}></CircularProgress> :
                                <label htmlFor="thumbnailFile" className='bg-black/[.7] cursor-pointer inline-block p-2 rounded-full'><CameraEnhanceIcon sx={{ color: 'white' }}></CameraEnhanceIcon></label>
                        }


                    </div>
                    <div className='flex justify-end absolute top-0 right-0 pb-4'>
                        <div>
                            {
                                uploadLoading ? <CircularProgress sx={{ color: 'white' }}></CircularProgress> : imgLoading || thumbnailLoading ? <span className='p-2 bg-red-900 m-4 text-white  '>Image Loading</span> : <button type='submit' className='p-2 bg-red-900 m-4 text-white'>Update</button>
                            }
                        </div>
                    </div>
                    <input onChange={handleThumbnailFile} type="file" accept="image/*" id='thumbnailFile' className="hidden" />


                </div>
                <div className='py-5 text-center'>
                    <input type="text" defaultValue={data.title} {...register("title", { required: true })} className='text-white border bg-transparent   border-white inline-block w-full text-center py-2 mb-4 text-xl' />
                    <textarea type="text" defaultValue={data.description} {...register("description", { required: true })} className='text-white bg-transparent   border-white inline-block w-full border text-center py-2' />
                </div>
                <div className='mb-4 mr-4'>
                    <input onChange={handlePhotosUpload} type="file" id='url' accept="image/*" className="hidden" multiple={true} />
                    {
                        imgLoading ? <CircularProgress sx={{ color: 'white' }} /> : <label htmlFor='url' className="text-center pointer-events-auto text-green-500 border-b border-green-500  mt-2 cursor-pointer ">

                            Add more images
                        </label>
                    }

                    {
                        selected.length ? <span onClick={() => handleDelete()} className="text-center  pointer-events-auto cursor-pointer text-red-500 ml-4 border-b border-red-500 mr-4  mt-2  ">Delete Selected image</span> : <span className="text-center grayscale pointer-events-auto cursor-pointer text-red-500 border-b border-red-500 ml-4  mt-2  ">Delete Selected image</span>
                    }
                    <button type='button' onClick={() => changeLayout()} className='text-center  pointer-events-auto cursor-pointer text-pink-500 ml-4 border-b border-pink-500 mr-4  mt-2'>Change Layout</button>

                </div>
                <Grid container>

                    <Grid container spacing={0}>
                        {
                            [1, 2, 3, 4].map((element, i) => {
                                const len = data.photos?.length / 4;

                                return <Grid key={i} item md={3} >
                                    {
                                        data.photos?.slice(len * i, len * element).map((res, i) => <CategorySingleImg selected={selected} setSelected={setSelected} admin allImage={data} elementNum={element} key={res} url={res} index={i}></CategorySingleImg>)
                                    }
                                </Grid>
                            })
                        }

                    </Grid>
                </Grid >
            </form>

        </div>
    );
};
UpdateCategory.Layout = DashboardLayout;
export default UpdateCategory;