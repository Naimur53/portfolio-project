import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const PhoneCollection = ({ data }) => {
    console.log('phone collection', data);
    return (
        <div>
            {
                data.map(single => {
                    if (single.dropdown?.length !== 0) {
                        return (
                            <Accordion
                                sx={{ background: 'black' }}
                                className='w-full border    mb-3  bg-black border-gray-700 rounded-sm hover:border-yellow-300 text-white'
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'white', }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Link href={'/category/' + single._id}>{single.categoryName}</Link>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {
                                        single?.dropdown?.map(inner => <Link href={'/category/' + inner._id} key={inner._id}><span className=' block p-2 hover:bg-yellow-600'>{inner.subCategory}</span></Link>)
                                    }
                                </AccordionDetails>
                            </Accordion>
                        )
                    }
                    return (
                        <Link href={'/category/' + single._id} key={single._id}><span className='w-full border  flex justify-center mb-3 py-2 border-gray-700 rounded-sm hover:border-yellow-300 text-white'>{single.categoryName}</span></Link>
                    )
                })
            }
        </div>
    );
};

export default PhoneCollection;