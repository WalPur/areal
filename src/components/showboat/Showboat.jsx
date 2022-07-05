import React from 'react';

import { Box, Container, Typography, } from '@mui/material';


import Images from '../../images';
import {  } from '@mui/system';

function Showboat() {
    return(
        <Box 
            sx={{
                backgroundColor: 'white',
                padding: "110px 0 "
            }}
        >
            <Container 
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <Box>
                    <Typography
                            sx={{
                                width: "659px",
                                height: "90px",
                                fontWeight: 700,
                                fontSize: 32,
                                lineHeight: "140%",
                                color: "#0000000",
                                marginBottom: "72px",
                            }}
                        >
                            Продажа недвижимости в Якутске и близлежащих населенных пунктах
                        </Typography>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            width: "1179px",
                            fontWeight: 400,
                            fontSize: 24,
                            lineHeight: "29px",
                            color: "#333333",
                            margin: "0 0px 25px 0",
                            display: "flex",
                            alignitems: "center",
                        }}
                    >
                        Покупка и продажа квартир на первичном и вторичном рынках городского и загородного жилья, аренда квартир, а также проводит сделки с коммерческой недвижимостью. Жилая и коммерческая недвижимость Якутска и близлезащих населенных пунктов представлена в нашем каталоге в самом полном объеме, в наличии есть множество вариантов жилья различного типа, предоставляемого как с помощью риэлторов, так и без посредников.
                    </Typography>
                    <Typography
                        sx={{
                            width: "1179px",
                            fontWeight: 400,
                            fontSize: 24,
                            lineHeight: "29px",
                            color: "#333333",
                            display: "flex",
                            alignitems: "center",
                        }}
                    >
                        Мы оказываем риэлторские услуги по аренде и продаже недвижимости во всех сегментах. С помощью наших специалистов вы сможете купить элитную недвижимость в Якутске, а также приобрести жилье эконом-класса. В нашей базе недвижимости, содержащей огромное количество предложений, найдутся как эксклюзивные квартиры, так и бюджетные варианты, а также большое количество загородного жилья всех категорий. Специалисты нашего агентства помогут в подборе оптимального для вас варианта и оформят сделку по  купле-продаже недвижимости максимально надежно и быстро!
                    </Typography>
                </Box>
                
            </Container>
        </Box>
    )
}

export default Showboat;
