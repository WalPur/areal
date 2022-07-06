import React from 'react';

import { Box, Container, Typography, } from '@mui/material';
import { styled } from '@mui/system';

import { MyText, MyTextTitle } from '../text';


import Images from '../../images';
import {  } from '@mui/system';

function Showboat() {
    const CustomBox = styled(Box)(({ theme }) => ({
        backgroundColor: "white",
        padding: "100px 0 ",
        [theme.breakpoints.down("md")]:{
            padding: "20px 0 ",
        }
    }));
    const MyCustomTextTitle = styled(MyTextTitle)(({ theme }) => ({
        marginBottom: "72px",
        [theme.breakpoints.down("md")]:{
            marginBottom: "20px",
        }
    }));
    const MyCustomText = styled(MyText)(({ theme }) => ({
        fontWeight: 400,
        lineHeight: "29px",
        color: "#333333",
        display: "flex",
        alignitems: "center",
        marginBottom: 10,
        [theme.breakpoints.down("md")]:{
            marginBottom: 6,
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
                <Box>
                    <MyCustomTextTitle>
                        Продажа недвижимости в Якутске и близлежащих населенных пунктах
                    </MyCustomTextTitle>
                </Box>
                <Box>
                    <MyCustomText>
                        Покупка и продажа квартир на первичном и вторичном рынках городского и загородного жилья, аренда квартир, а также проводит сделки с коммерческой недвижимостью. Жилая и коммерческая недвижимость Якутска и близлезащих населенных пунктов представлена в нашем каталоге в самом полном объеме, в наличии есть множество вариантов жилья различного типа, предоставляемого как с помощью риэлторов, так и без посредников.
                    </MyCustomText>
                    <MyText
                        sx={{
                            fontWeight: 400,
                            lineHeight: "29px",
                            color: "#333333",
                            display: "flex",
                            alignitems: "center",
                        }}
                    >
                        Мы оказываем риэлторские услуги по аренде и продаже недвижимости во всех сегментах. С помощью наших специалистов вы сможете купить элитную недвижимость в Якутске, а также приобрести жилье эконом-класса. В нашей базе недвижимости, содержащей огромное количество предложений, найдутся как эксклюзивные квартиры, так и бюджетные варианты, а также большое количество загородного жилья всех категорий. Специалисты нашего агентства помогут в подборе оптимального для вас варианта и оформят сделку по  купле-продаже недвижимости максимально надежно и быстро!
                    </MyText>
                </Box>
                
            </Container>
        </CustomBox>
    )
}

export default Showboat;
