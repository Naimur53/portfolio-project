
import { Container } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import DashboardLayout from '../../src/Layouts/DashboardLayout'

const AddBlog = () => {
    const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data.file[0]);
        var formData = new FormData();
        formData.append("video", data.file[0]);

        // sending to api
        axios.post('http://localhost:5000/video', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'

            }
        })
            .then(res => {
                console.log(res, 'success');
            })
    }

    return (
        <>
            <form className='mt-20' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("file", { required: true })} type="file" accept="video/*" />
                <button type='submit'>submit</button>
            </form>

        </>
    );
};
AddBlog.Layout = DashboardLayout;

export default AddBlog;