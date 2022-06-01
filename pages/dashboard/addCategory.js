import DashboardLayout from "../../src/Layouts/DashboardLayout";
import { useForm } from "react-hook-form";
import { CircularProgress, Grid, TextField, Tooltip } from "@mui/material";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
const AddCategory = () => {
    const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();
    const [thumbnailLoading, setThumbnailLoading] = useState(false);
    const [imgLoading, setImgLoading] = useState(false);
    const onSubmit = data => {

        if (!data.thumbnail) {
            alert('thumbnail not found')
            return
        }
        if (!data.photos.length) {
            alert('Please choose images for category')
            return
        }
        delete data.thumbnailFile;
        delete data.url;

        // sending to api
        axios.post('http://localhost:5000/category', data)
            .then(res => {
                console.log(res, 'success');
            })
        console.log(data);
        reset();
    }
    // handle multiple img upload 
    useEffect(() => {
        const file = watch('url');
        console.log('file', Object.values(file), process.env.NEXT_PUBLIC_IMAGEBB_API);
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
                const allUrl = res.map(singleRes => {
                    return {
                        url: singleRes.data.data?.url,
                        name: singleRes.data.data?.title
                    }
                })
                setValue('photos', allUrl);
                console.log('url', allUrl);
                setImgLoading(false);

            }).catch(e => {
                setValue('photos', []);
                setValue('url', [])
                alert('unknown error happen in multiple image upload')
                setImgLoading(false);
            })
        }

    }, [watch('url')]);
    //handle thumbnails image upload
    useEffect(() => {
        const file = watch('thumbnailFile');
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

                    alert('unknow error happen on img upload')

                })
                .finally(() => setThumbnailLoading(false))
        }


    }, [watch('thumbnailFile')])
    const photosUrls = () => {
        let bgUrl;
        if (watch('photos')?.length) {
            bgUrl = watch('photos').map(single => `url("${single.url}")`)
            return bgUrl.join(',')
        }
        console.log(bgUrl.join(','));
        return bgUrl;
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  justify-center'>



                <Grid container spacing={4}>
                    <Grid xs={12} md={6} item>

                        <input className="w-full p-3 rounded-lg  bg-gray-900 placeholder:text-slate-400" placeholder="Category Name"  {...register("categoryName", { required: true })} />

                    </Grid>
                    <Grid xs={12} md={6} item>

                        <input className="w-full p-3 rounded-lg  bg-gray-900 placeholder:text-slate-400" placeholder="Title"  {...register("title", { required: true })} />

                    </Grid>
                    <Grid xs={12} md={6} item>
                        <Box
                            className='h-40 bg-gray-900 bg-center flex justify-center items-center'
                            sx={{
                                backgroundImage: `url("${watch('thumbnail')}")`
                            }}
                        >
                            <input {...register("thumbnailFile", { required: true })} type="file" accept="image/*" id='thumbnailFile' className="hidden" />
                            {
                                thumbnailLoading ? <CircularProgress color="inherit"></CircularProgress> : <label htmlFor='thumbnailFile' className="bg-black/[.7] p-2 rounded-md">Choose Thumbnail</label>
                            }

                        </Box>

                    </Grid>
                    <Grid xs={12} md={6} item>
                        <Box
                            className={`h-40 relative dashboard-scrollBar  bg-gray-900 ${imgLoading ? "overflow-hidden" : "overflow-x-auto"}`}

                        >

                            <div className="absolute   pointer-events-none inset-0 flex justify-center items-center">
                                <input {...register("url", { required: true })} type="file" id='url' accept="image/*" className="hidden" multiple={true} />
                                {
                                    imgLoading ? <div className='z-10 w-full h-full flex justify-center items-center backdrop-blur-sm'> <CircularProgress color="inherit"></CircularProgress></div> : watch('photos')?.length ? '' : <label htmlFor='url' className="z-10 bg-black/[.7] p-2  rounded-md pointer-events-auto">Choose Images</label>
                                }
                            </div>
                            <div className="pr-2">
                                {
                                    watch('photos')?.length && <Grid container spacing={2}>
                                        <Grid item xs={3}  >
                                            <div className="p-1 h-full">
                                                <label htmlFor='url' className="flex justify-center items-center h-full w-full bg-black/[.7] p-2  rounded-md text-center pointer-events-auto">
                                                    <div className='flex items-center flex-col '>
                                                        <Tooltip title="Change image" arrow>
                                                            <AddAPhotoIcon></AddAPhotoIcon>
                                                        </Tooltip>

                                                    </div>
                                                </label>
                                            </div>

                                        </Grid>
                                        {
                                            watch('photos')?.map((single) => <Grid item xs={3} key={single.url}><Image src={single.url} width={100} height={100}></Image></Grid>)
                                        }

                                    </Grid>
                                }
                            </div>

                        </Box>

                    </Grid>
                    <Grid xs={12} item>

                        <input className="w-full p-3 rounded-lg  bg-gray-900 placeholder:text-slate-400" placeholder="Enter Short description"  {...register("description", { required: true })} />

                    </Grid>

                </Grid>


                {
                    !imgLoading && !thumbnailLoading ? <div className="mt-5">
                        <input className="bg-yellow-400 px-4 rounded-md text-black p-2" type="submit" />
                    </div> : <div className="mt-5">
                        <button className="bg-red-400 rounded-md text-black p-2"  >Loading Images</button>
                    </div>
                }

            </form>
        </div>
    );
};
AddCategory.Layout = DashboardLayout;
export default AddCategory;