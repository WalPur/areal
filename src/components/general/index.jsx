import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

import Images from '../../images';

function General() {
    const CustomButton = styled(Box)(({ theme }) => ({
        marginBottom: 51,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        backgroundColor: "#967848",
        width: 240,
        height: 55,
        fontWeight: 400,
        fontSize: 18,
        lineHeight: "130%",
        color: "#ffffff",
    }));
    return(
        <Box 
            sx={{
                height: "100vh",
                width: "100vw",
                backgroundImage: `url(${Images.general_bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <Container 
                maxWidth="lg"
                sx={{

                }}
            >
                <Box
                    sx={{
                        pt: 4,
                        width: "60%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <img src={Images.logo}/>
                    <Typography
                        sx={{
                            fontWeight: 400,
                            fontSize: 24,
                            lineHeight: "160%",
                            color: "#ffffff",
                        }}
                    >+7(914)-273-13-18</Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            mt: "20%",
                            mb: 5.1,
                            fontWeight: 400,
                            fontSize: 36,
                            lineHeight: "130%",
                            color: "#ffffff",
                        }}
                    >
                        РИЭЛТОРСКАЯ КОМПАНИЯ ООО “АРЕАЛ”
                    </Typography>
                    <HashLink to="">
                        <CustomButton>
                            Выбрать апартаменты
                        </CustomButton>
                    </HashLink>
                    <Typography
                        sx={{
                            textAlign: "center",
                            width: 617,
                            fontWeight: 400,
                            fontSize: 24,
                            lineHeight: "140%",
                            color: "#fff"
                        }}
                    >
                        Срочная продажа квартир и комнат на ваших условиях, сбор документов по ускоренной схеме
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default General;