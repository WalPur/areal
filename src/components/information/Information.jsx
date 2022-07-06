import React from 'react';

import { Box, Container, Typography, } from '@mui/material';
import { styled } from '@mui/system';

import { MyText, MyTextTitle } from '../text';

import Images from '../../images';
import {  } from '@mui/system';

function Information() {
    const data = [
        {
            img: Images.Information_i1,
            text: "Квартиры и комнаты"
        },
        {
            img: Images.Information_i2,
            text: "Новостройки"
        },
        {
            img: Images.Information_i3,
            text: "Аренда квартир и комнат"
        },
        {
            img: Images.Information_i4,
            text: "Коттеджи, участки"
        },
        {
            img: Images.Information_i5,
            text: "Коммерческая недвижимость"
        },
    ];
    const MyTypography = styled(Typography)(({ theme }) => ({
        textAlign: "left",        
        fontWeight: 400,
        fontSize: 18,
        lineHeight: "140%",
        color: "#333333",
        maxWidth: 721,
        margin: "0 0 100px 0",
        [theme.breakpoints.down("md")]: {
            fontSize: 14,
            margin: "0 0 30px 0",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 10,
        }
    }));
    const CustomContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
        }
    }));
    const CustomTitle = styled(MyTextTitle)(({ theme }) => ({
        maxWidth: 801,
        fontWeight: 400,
        margin: "0 24px 60px 0",
        [theme.breakpoints.down("md")]:{
            margin: "0 0 30px 0",
        }
    }));
    const CustomBox = styled(Box)(({ theme }) => ({
        backgroundColor: 'white',
        padding: "100px 0 ",
        [theme.breakpoints.down("md")]:{
            padding: "20px 0 ",
        }
    }));
    return(
        <CustomBox>
            <CustomContainer 
                maxWidth="lg"
                sx={{
                    
                }}
            >
                <Box>
                    
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                        }}
                    >
                        <CustomTitle>
                            Риэлторская компания “АРЕАЛ” — базируется в городе Якутск, Республики Саха (Якутия)
                        </CustomTitle>
                        <MyTypography>
                            АРЕАЛ — это все риэлторские услуги: купля, продажа, обмен, аренда жилой и коммерческой недвижимости Якутска, помощь в получении ипотеки. Защита интересов наших клиентов и юридическая чистота проводимых сделок делат нас одним из лучших.
                        </MyTypography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            alignSelf: "center",
                        }}
                    >
                        {data.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    alignSelf: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "60px",
                                        height: "57px",
                                        display: "flex",
                                        textAlign: "center",
                                        alignSelf: "center",
                                        flexDirection: "column",
                                        marginBottom: "26px"
                                    }}
                                >
                                    <img src={item.img} alt="Information" />
                                </Box>
                                <MyText
                                    sx={{
                                        width: "130px",
                                        textAlign: "center",
                                        mb: 2,
                                    }}
                                >
                                    {item.text}
                                </MyText>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box
                    sx={{
                        maxWidth: "335px",
                        alignSelf: "center",
                    }}
                >
                    <img src={Images.information} style={{ width: "100%" }} alt="information" />
                </Box>
            </CustomContainer>
        </CustomBox>
    )
}

export default Information;