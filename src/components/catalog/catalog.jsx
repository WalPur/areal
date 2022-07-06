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
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
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
            marginBottom: 20,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        }
    }));
    const ItemBox = styled(Box)(({ theme }) => ({
        width: "220px",
        marginBottom: "30px"
    }));
    const CustomBox = styled(Box)(({ theme }) => ({
        backgroundColor: "white",
        padding: "100px 0 ",
        [theme.breakpoints.down("md")]:{
            padding: "20px 0 ",
        }
    }));
    const data = [
        {
            img: Images.Catalog_1,
            price: "6 400 000 руб.",
            text: "1 комн., 36 м2, инд. планировка, 203 мкрн.",
        },
        {
            img: Images.Catalog_2,
            price: "16 500 000 руб.",
            text: "Частный каменный дом с площадью 180 м2",
        },
        {
            img: Images.Catalog_3,
            price: "6 850 000 руб.",
            text: "2 комн., 112 серия, Центр. район, пл. Орджоникидзе",
        },
        {
            img: Images.Catalog_4,
            price: "2 500 руб.",
            text: "Сдается посуточно 1 комн. квартира ",
        },
    ]
    return(
        <CustomBox 
            sx={{
                backgroundColor: "white",
                padding: "100px 0"
            }}
            id="catalog"
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
                        justifyContent: "space-evenly",
                        alignItems: "top",
                        flexWrap: "wrap"
                    }}
                >
                    {data.map((item, index) => (
                        <ItemBox 
                            key={index}
                            sx={{
                                width: "220px",
                                display: "flex",
                                flexDirection: "column",
                                textAlign: "center",
                                margin: "0 20px 20px",
                            }}
                        >
                            <Box  
                                sx={{
                                    marginBottom: "21px"
                                }}
                            >
                                <img src={item.img} alt="" />
                            </Box>
                            <TypograhyText
                                sx={{
                                    marginBottom: "14px"
                                }}
                            >
                                {item.price}
                            </TypograhyText>
                            <TypographySubtitle>{item.text}</TypographySubtitle>
                        </ItemBox>
                    ))}
                </Box>
            </Container>
        </CustomBox>
    )
}

export default Catalog;