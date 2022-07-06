import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

import Images from '../../images';

function General() {
    const CustomButton = styled(Box)(({ theme }) => ({
        textAlign: "center",
        marginBottom: 51,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#967848",
        width: 240,
        height: 55,
        fontWeight: 400,
        fontSize: 18,
        lineHeight: "130%",
        color: "#ffffff",
        [theme.breakpoints.down('md')]: {
            width: 160,
            height: 40,
            fontSize: 14,
            marginBottom: 20,
        },
        [theme.breakpoints.down('sm')]: {
            width: 100,
            height: 30,
            fontSize: 10,
        }
    }));
    const TypograhyText = styled(Typography)(({ theme }) => ({
        fontWeight: 400,
        fontSize: 24,
        lineHeight: "140%",
        color: "#fff",
        [theme.breakpoints.down('md')]: {
            fontSize: 16,
            width: 500,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
            maxWidth: 260,
        }
    }));
    const TypographyTitle = styled(Typography)(({ theme }) => ({
        textAlign: "center",
        marginTop: "20%",
        marginBottom: 51,
        fontWeight: 400,
        fontSize: 36,
        lineHeight: "130%",
        color: "#ffffff",
        [theme.breakpoints.down('md')]: {
            fontSize: 20,
            marginTop: "20%",
            marginBottom: 20,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        }
    }));
    const CustomBox = styled(Box)(({ theme }) => ({
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${Images.general_bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        [theme.breakpoints.down('md')]: {
            height: "70vh",
        },
        [theme.breakpoints.down('sm')]: {
            height: "50vh",
        }
    }));
    return(
        <CustomBox>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        pt: 4,
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <img src={Images.logo}/>
                    <TypograhyText sx={{ textAlign: "end" }}>+7(914)-273-13-18</TypograhyText>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <TypographyTitle>
                        РИЭЛТОРСКАЯ КОМПАНИЯ ООО “АРЕАЛ”
                    </TypographyTitle>
                    <HashLink to="#catalog">
                        <CustomButton>
                            Выбрать апартаменты
                        </CustomButton>
                    </HashLink>
                    <TypograhyText
                        sx={{
                            textAlign: "center",
                            width: 617,
                        }}
                    >
                        Срочная продажа квартир и комнат на ваших условиях, сбор документов по ускоренной схеме
                    </TypograhyText>
                </Box>
            </Container>
        </CustomBox>
    )
}

export default General;