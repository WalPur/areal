import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

import Images from '../../images';

function News() {
    const TypograhyText = styled(Typography)(({ theme }) => ({
        fontWeight: 500,
        fontSize: 24,
        lineHeight: "140%",
        color: "#00000",
        alignText: "center",
        marginBottom: "11px",
        [theme.breakpoints.down('md')]: {
            fontSize: 16,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        }
    }));
    const TypographySubtitle = styled(Typography)(({ theme }) => ({
        fontSize: 12,
        lineHeight: "140%",
        fontweight: 400,
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
    const data = [
        {
            img: Images.News_1,
            date: "05.07.2022",
            text: "9-10 июля офис “Сходненское” приглашает на Дни открытых дверей",
        },
        {
            img: Images.News_2,
            date: "05.07.2022",
            text: "Успей купить готовый коттедж в жилом КП",
        },
        {
            img: Images.News_3,
            date: "04.07.2022",
            text: "9 июля в офисе “Сокол” состоится День открытых дверей",
        },
        {
            img: Images.News_4,
            date: "01.07.2022",
            text: "Газета “Недвижимость нашего района” офиса “Зеленый проспект”: 70-й выпуск!",
        },
    ];
    const CustomBox = styled(Box)(({ theme }) => ({
        padding: "100px 0 ",
        [theme.breakpoints.down("md")]:{
            padding: "20px 0 ",
        }
    }));
    const ImageBox = styled(Box)(({ theme }) => ({
        marginBottom: "51px",
        [theme.breakpoints.down("md")]:{
            marginBottom: "20px",
        }
    }));
    return(
        <CustomBox>
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
                    Новости
                </TypographyTitle>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flexWrap: "wrap"
                    }}
                >
                    {data.map((item, index) => (
                        <ItemBox 
                            sx={{ width: "250px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
                        >
                            <ImageBox>
                                <img src={item.img} alt="" />
                            </ImageBox>
                            <TypograhyText>{item.date}</TypograhyText>
                            <TypographySubtitle>{item.text}</TypographySubtitle>
                        </ItemBox>
                    ))}
                </Box>
            </Container>
        </CustomBox>
    )
}

export default News;