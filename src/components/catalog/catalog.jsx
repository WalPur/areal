import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

import Images from '../../images';

function Catalog() {
    const TypograhyText = styled(Typography)(({ theme }) => ({
        fontWeight: 400,
        fontSize: 24,
        lineHeight: "140%",
        color: "#00000",
        [theme.breakpoints.down('md')]: {
            fontSize: 16,
            width: 500,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
            maxWidth: 260,
        }
    }));
    const TypographySubtitle = styled(Typography)(({ theme }) => ({
        fontSize: 16,
        lineHeight: "130%",
        color: "#000000",
        [theme.breakpoints.down('md')]: {
            fontSize: 12,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 8,
        }
    }));
    const TypographyTitle = styled(Typography)(({ theme }) => ({
        textAlign: "center",
        marginBottom: 51,
        fontWeight: 700,
        fontSize: 36,
        lineHeight: "130%",
        color: "#000000",
        [theme.breakpoints.down('md')]: {
            fontSize: 20,
            marginTop: "20%",
            marginBottom: 20,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        }
    }));
    const ItemBox = styled(Box)(({ theme }) => ({
        width: "220px",
        marginBottom: "30px"
    }))
    return(
        <Box 
            sx={{
                backgroundColor: "white",
                padding: "100px 0"
            }}
        >
            <Container 
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <TypographyTitle
                    sx={{
                        textAlign: "left"
                    }}
                >
                    Каталог недвижимости
                </TypographyTitle>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap"
                    }}
                >
                    <ItemBox 
                        sx={{
                            width: "220px",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            textAlign: "center"
                        }}
                    >
                        <Box  
                            sx={{
                                marginBottom: "21px"
                            }}
                            >
                                <img src={Images.Catalog_1} alt="" />
                            </Box>
                        
                        <TypograhyText
                            sx={{
                                marginBottom: "14px"
                            }}
                        >
                            6 400 000 руб.
                        </TypograhyText>
                        <TypographySubtitle>1 комн., 36 м2, инд. планировка, 203 мкрн.</TypographySubtitle>
                    </ItemBox>
                    <ItemBox 
                        sx={{
                            width: "220px",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            textAlign: "center"
                        }}>
                            <Box  
                            sx={{
                                marginBottom: "21px"
                            }}
                            >
                                <img src={Images.Catalog_2} alt="" />
                            </Box>
                        <TypograhyText 
                            sx={{
                                marginBottom: "14px",
                            }}
                        >
                            16 500 000 руб.
                        </TypograhyText>
                        <TypographySubtitle>Частный каменный дом с площадью 180 м2</TypographySubtitle>
                    </ItemBox>
                    <ItemBox 
                        sx={{
                            width: "220px",
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center",
                        }}>
                            <Box  
                            sx={{
                                marginBottom: "21px",
                            }}
                            >
                                <img src={Images.Catalog_3} alt="" />
                            </Box>
                        <TypograhyText 
                            sx={{
                                marginBottom: "14px",
                                width: '221px',
                            }}
                        >
                            6 850 000 руб.
                        </TypograhyText>
                        <TypographySubtitle sx={{
                                width: '221px',
                            }}>
                                2 комн., 112 серия, Центр. район, пл. Орджоникидзе
                            </TypographySubtitle>
                    </ItemBox>
                    <ItemBox 
                        sx={{
                            width: "220px",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            textAlign: "center"
                        }}>
                            <Box  
                            sx={{
                                marginBottom: "21px"
                            }}
                            >
                                <img src={Images.Catalog_4} alt="" />
                            </Box>
                        <TypograhyText 
                            sx={{
                                marginBottom: "14px"
                            }}
                        >
                            2 500 руб.
                        </TypograhyText>
                        <TypographySubtitle>Сдается посуточно 1 комн. квартира</TypographySubtitle>
                    </ItemBox>
                </Box>
            </Container>
        </Box>
    )
}

export default Catalog;