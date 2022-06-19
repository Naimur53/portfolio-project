import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';

const HomeTextSection = () => {
    const { scrollValue } = useSelector(allData);
    useEffect(() => {

    }, [scrollValue])
    return (
        <div className='h-full   relative flex font-family-allerta justify-center items-center'>
            <h2 className='text-6xl text-center'>
                Don’t over
                <br />
                organize.
                <br />
                Be on time and
                <br />
                stay until you are
                <br />
                completely
                <br />
                satisfied.
            </h2>
            <div className='absolute inset-0  flex justify-center items-center font-family-roboto'>
                <div>
                    <div>

                        <span className='p-3 mr-5 text-gray-800 bg-yellow-400 rounded-full '>Lorem ipsum dolor sit amet consectetur </span>
                        <span className='p-3 mr-5 text-gray-800 bg-yellow-400 rounded-full '>Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                    <div className='my-10'>

                        <span className='p-3 mr-5 text-gray-800 bg-yellow-400 rounded-full '>Lorem ipsum dolor sit amet consectetur </span>
                        <span className='mr-5 p-3 text-gray-800 bg-yellow-400 rounded-full '>Lorem ipsum dolor sit amet consectetur </span>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <span className='p-3 text-gray-800 bg-yellow-400 rounded-full '>Lorem ipsum dolor sit amet consectetur </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HomeTextSection;