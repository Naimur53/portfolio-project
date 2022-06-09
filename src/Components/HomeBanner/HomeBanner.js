import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import BannerText from './BannerText';
import CheckBanner from './CheckBanner';
const HomeBanner = () => {
    const { scrollValue } = useSelector(allData)
    const [circle, setCircle] = useState([46, 76, 53])

    useEffect(() => {
        // circle(46.0 % at 76 % 53 %)
        const parse = parseInt(scrollValue * 100);
        let v1 = 46;
        let v2 = 76;
        let v3 = 53;
        if (scrollValue) {
            if (parse >= 1 && parse <= 25) {
                setCircle([40, 50, 50])
            }
            else {
                setCircle([50, 59, 94])
            }

        } else {
            setCircle([46, 76, 53])

        }
    }, [scrollValue])
    return (
        <Box className='h-screen relative'>
            <Container sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                <Grid container spacing={4} sx={{ height: '100%' }} alignItems='center'>
                    <Grid item md={8} xs={12}  >
                        <BannerText></BannerText>
                    </Grid>
                    <Grid sx={{ height: '100%' }} item md={4} xs={12}  >
                        <CheckBanner></CheckBanner>
                        {/* <Box
                            className='innerBanner'
                            sx={{
                                // clipPath: clip

                            }}
                        >
                        </Box> */}
                    </Grid>
                </Grid>

            </Container>




        </Box>
    );
};

export default HomeBanner;