import React from 'react';

import { Box, Container, Typography, } from '@mui/material';


import Images from '../../images';

function Information() {
    return(
        <Box 
            sx={{
                backgroundColor: 'white',
            }}
        >
            <Container 
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexDirection: "row"
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
                        <Typography
                            sx={{
                                fontWeight: 400,
                                fontSize: 32,
                                lineHeight: "130%",
                                color: '#333333',
                            }}
                        >
                            Риэлторская компания “АРЕАЛ” — базируется в городе Якутск, Республики Саха (Якутия)
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: "left",
                                width: 721,
                                fontWeight: 400,
                                fontSize: 18,
                                lineHeight: "140%",
                                color: "#333333"
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
                        }}
                    >
                        <Box>
                            <img src={Images.Information_i1} alt="Information_i1" />
                            <Typography 
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                lineHeight: "20px",
                                color: '#000000',

                            }}
                            >
                                Квартиры и комнаты
                            </Typography>
                        </Box>
                        <Box>
                            <img src={Images.Information_i2} alt="Information_i2" />
                            <Typography 
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                lineHeight: "20px",
                                color: '#000000',
                            }}
                            >
                                Новостройки
                            </Typography>
                        </Box>
                        <Box>
                            <img src={Images.Information_i3} alt="Information_i3" />
                            <Typography 
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                lineHeight: "20px",
                                color: '#000000',
                            }}
                            >
                                Аренда квартир и комнат
                            </Typography>
                        </Box>
                        <Box>
                            <img src={Images.Information_i4} alt="Information_i4" />
                            <Typography 
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                lineHeight: "20px",
                                color: '#000000',
                            }}
                            >
                                Коттеджи, участки
                            </Typography>
                        </Box>
                        <Box>
                            <img src={Images.Information_i5} alt="Information_i5" />
                            <Typography 
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                lineHeight: "20px",
                                color: '#000000',
                            }}
                            >
                                Коммерческая недвижимость
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <img src={Images.information} alt="information" />
                </Box>
            </Container>
        </Box>
    )
}

export default Information;