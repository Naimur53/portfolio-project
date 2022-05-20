import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import CheckBanner from './CheckBanner';
const HomeBanner = () => {
    const { scrollValue } = useSelector(allData)
    const [circle, setCircle] = useState([46, 76, 53])

    // clip-path: circle(46.0% at 76% 53%); 
    useEffect(() => {
        console.log(parseInt(scrollValue * 100));
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
        <Box className='h-screen'>
            <Container sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                <Grid container spacing={4} sx={{ height: '100%' }} alignItems='center'>
                    <Grid item md={6} xs={12}  >
                        <Typography color="#2d3e50" gutterBottom variant='h3' sx={{ fontWeight: '900' }}>Let&apos;s grow together.</Typography>
                        <Typography gutterBottom variant='body1' sx={{}}>I have taken the time to take my photos. I did it with passion and endless patience. May I also ask you to take the time to look at my work. Preferably not on your smart phone but if it cant be otherwise … Try to become one with the image and feel what happened when I took the photo.</Typography>
                        <Button
                            style={{ backgroundColor: "#FF5E14", }}
                            sx={{
                                borderRadius: 1,
                                p: 2,
                                fontWeight: 'bold',
                                me: 5,
                                mt: 2,
                                position: 'relative',
                                zIndex: 2
                            }}
                            variant='contained'>
                            see all open options
                        </Button>

                    </Grid>
                    <Grid sx={{ height: '100%' }} item md={6} xs={12}  >
                        <CheckBanner></CheckBanner>
                        {/* <Box
                            className='innerBanner'
                            sx={{
                                // clipPath: `circle(${circle[0] + '%'} at ${circle[1] + '%'} ${circle[0] + '%'})`

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