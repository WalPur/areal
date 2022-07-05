import React from 'react';

import { Box, Container, Typography, } from '@mui/material';


import Images from '../../images';
import {  } from '@mui/system';

function Information() {
    return(
        <Box 
            sx={{
                backgroundColor: 'white',
                padding: "100px 0 "
            }}
        >
            <Container 
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexDirection: "row"
                }}
            >
                <Box
                    sx={{
                        marginLeft: "24px"
                    }}
                >
                    
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "left",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 400,
                                fontSize: 32,
                                lineHeight: "130%",
                                color: '#333333',
                                margin: "0 24px 60px 0"
                            }}
                        >
                            Риэлторская компания “АРЕАЛ” — базируется в городе Якутск, Республики Саха (Якутия)
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: "left",
                                
                                fontWeight: 400,
                                fontSize: 18,
                                lineHeight: "140%",
                                color: "#333333",
                                margin: "0 104px 100px 0"
                            }}
                        >
                            АРЕАЛ — это все риэлторские услуги: купля, продажа, обмен, аренда жилой и коммерческой недвижимости Якутска, помощь в получении ипотеки. Защита интересов наших клиентов и юридическая чистота проводимых сделок делат нас одним из лучших.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            alignSelf: "center",
                            marginRight: "66px"
                        }}
                    >
                        <Box
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
                                <img src={Images.Information_i1} alt="Information_i1" />
                            </Box>
                            <Typography 
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                lineHeight: "20px",
                                color: '#000000',
                                width: "91px",
                                height: "40px",
                                textAlign: "center",
                            }}
                            >
                                Квартиры и комнаты
                            </Typography>
                        </Box>
                        <Box
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
                                <img src={Images.Information_i2} alt="Information_i2" />
                            </Box>
                            <Typography 
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                lineHeight: "20px",
                                color: '#000000',
                                width: "114px",
                                height: "40px",
                                textAlign: "center",
                            }}
                            >
                                Новостройки
                            </Typography>
                        </Box>
                        <Box
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
                                <img src={Images.Information_i3} alt="Information_i3" />
                            </Box>
                            <Typography 
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                lineHeight: "20px",
                                color: '#000000',
                                width: "150px",
                                height: "40px",
                                textAlign: "center",
                            }}
                            >
                                Аренда квартир и комнат
                            </Typography>
                        </Box>
                        <Box
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
                                <img src={Images.Information_i4} alt="Information_i4" />
                            </Box>
                            <Typography 
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                lineHeight: "20px",
                                color: '#000000',
                                width: "86px",
                                textAlign: "center",
                            }}
                            >
                                Коттеджи, участки
                            </Typography>
                        </Box>
                        <Box
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
                                <img src={Images.Information_i5} alt="Information_i5" />
                            </Box>
                            <Typography 
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                lineHeight: "20px",
                                color: '#000000',
                                width: "127px",
                                height: "40px",
                                textAlign: "center",
                            }}
                            >
                                Коммерческая недвижимость
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "335px",
                        height: "510px",
                    }}
                >
                    <img src={Images.information} alt="information" />
                </Box>
            </Container>
        </Box>
    )
}

export default Information;