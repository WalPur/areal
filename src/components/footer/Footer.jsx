import React from 'react';

import { Box, Container, Typography, } from '@mui/material';


import Images from '../../images';

import {  } from '@mui/system';

function Footer() {
    return(
        <Box 
            sx={{
                backgroundColor: "#25211B",
                padding: "67px 0 0"
            }}
        >
            <Container 
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column"
                    }}
                >

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "start",
                            marginBottom: "30px",
                            textAlign: "center",
                        }}
                    >
                        <Box>
                            <img src={Images.footer} alt="footer" />
                        </Box>
                        
                        <Typography
                            sx={{
                                width: "242px",
                                height: "45px",
                                fontWeight: 700,
                                fontSize: 31,
                                lineHeight: "140%",
                                color: "#FFFFFF",
                                marginLeft: "26px"
                            }}
                        >
                            ООО “АРЕАЛ”
                        </Typography>
                        <Typography
                            sx={{
                                width: "364px",
                                height: "45px",
                                fontWeight: 500,
                                fontSize: 32,
                                color: "#FFFFFF",
                                marginLeft: "41px"
                            }}
                        >
                            +7(914)-273-13-18
                        </Typography>
                        <Typography
                            sx={{
                                width: "299px",
                                height: "42px",
                                fontWeight: 400,
                                fontSize: 26,
                                lineHeight: "160%",
                                color: "#FFFFFF",
                                marginLeft: "92px"
                            }}
                        >
                            areal14reg@gmail.com
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                    >
                        <Box>
                            <img src={Images.footer2} alt="footer2" />
                        </Box>
                        <Typography
                            sx={{
                                width: "112px",
                                fontWeight: 500,
                                fontSize: 10,
                                lineHeight: "160%",
                                color: "#FFFFFF",
                                display: "flex",
                                alignitems: "center",
                            }}
                        >
                            2022, ООО “АРЕАЛ”
                        </Typography>
                    </Box>
                </Box>
            
            </Container>
        </Box>
    )
}

export default Footer;