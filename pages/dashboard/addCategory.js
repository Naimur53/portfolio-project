import DashboardLayout from "../../src/Layouts/DashboardLayout";
import { useForm } from "react-hook-form";
import { CircularProgress, TextField } from "@mui/material";
import axios from 'axios';
import { useEffect, useState } from "react";
const AddCategory = () => {
    const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();
    const [thumbnailLoading, setThumbnailLoading] = useState(false);
    const [imgLoading, setImgLoading] = useState(false);
    const onSubmit = data => {

        if (!data.thumbnail) {
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

            }).catch(e => {
                alert('unknown error happen in multiple image upload')
            })
                .finally(() => {
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
                .catch(e => alert('unknow error happen on img upload'))
                .finally(() => setThumbnailLoading(false))
        }


    }, [watch('thumbnailFile')])

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  justify-center'>


                <input {...register("thumbnailFile", { required: true })} type="file" accept="image/*" id='thumbnailFile' />
                <label htmlFor='thumbnailFile'>thumbnail image</label>

                <TextField className="bg-gray-100" color="success" id="filled-basic"  {...register("categoryName", { required: true })} label="category name" variant="filled" />

                <TextField className="bg-gray-100" color="success" id="standard-basic"  {...register("title", { required: true })} label="title" variant="filled" />

                <TextField className="bg-gray-100" color="success" id="standard-basic"  {...register("description", { required: true })} label="description" variant="filled" />

                <input {...register("url", { required: true })} type="file" accept="image/*" multiple={true} />
                {
                    !imgLoading && !thumbnailLoading ? <input className="bg-green-400 p-2" type="submit" /> : <CircularProgress></CircularProgress>
                }

            </form>
        </div>
    );
};
AddCategory.Layout = DashboardLayout;
export default AddCategory;