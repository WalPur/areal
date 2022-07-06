import React from 'react';

import { Box, Container, Typography, } from '@mui/material';
import { styled } from "@mui/system";

import Images from '../../images';

function Footer() {
    const MyText1 = styled(Typography)(({ theme }) => ({
        fontWeight: 700,
        fontSize: 31,
        lineHeight: "140%",
        color: "#FFFFFF",
        margin: "0 10px",
        [theme.breakpoints.down("lg")]:{
            fontSize: 22,
        },
        [theme.breakpoints.down("md")]:{
            fontSize: 14,
        },
    }));
    const MyText2 = styled(Typography)(({ theme }) => ({
        fontWeight: 500,
        fontSize: 32,
        color: "#FFFFFF",
        margin: "0 10px",
        [theme.breakpoints.down("lg")]:{
            fontSize: 24,
        },
        [theme.breakpoints.down("md")]:{
            fontSize: 16,
        }
    }));
    const MyText3 = styled(Typography)(({ theme }) => ({
        fontWeight: 400,
        fontSize: 26,
        lineHeight: "160%",
        color: "#FFFFFF",
        margin: "0 10px",
        [theme.breakpoints.down("lg")]:{
            fontSize: 18,
        },
        [theme.breakpoints.down("md")]:{
            fontSize: 12,
        }
    }));
    const MyText4 = styled(Typography)(({ theme }) => ({
        width: "112px",
        fontWeight: 500,
        fontSize: 10,
        lineHeight: "160%",
        color: "#FFFFFF",
        display: "flex",
        alignitems: "center",
    }));
    const CustomLogo = styled(Box)(({ theme }) => ({
        width: 74,
        [theme.breakpoints.down("lg")]:{
            width: 40,
        },
        [theme.breakpoints.down("md")]:{
            width: 30,
        }
    }));
    const CustomBox = styled(Box)(({ theme }) => ({
        backgroundColor: "#25211B",
        padding: "67px 0 7px",
        [theme.breakpoints.down("md")]:{
            padding: "30px 0 7px",
        }
    }));
    return(
        <CustomBox>
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
                            flexWrap: "wrap",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            marginBottom: "30px",
                            textAlign: "center",
                        }}
                    >
                        <CustomLogo>
                            <img src={Images.footer} style={{ width: "100%" }} alt="footer" />
                        </CustomLogo>
                        
                        <MyText1>
                            ООО “АРЕАЛ”
                        </MyText1>
                        <MyText2>
                            +7(914)-273-13-18
                        </MyText2>
                        <MyText3>
                            areal14reg@gmail.com
                        </MyText3>
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
                        <MyText4>
                            2022, ООО “АРЕАЛ”
                        </MyText4>
                    </Box>
                </Box>
            
            </Container>
        </CustomBox>
    )
}

export default Footer;