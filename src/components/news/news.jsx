import { Box, Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

import Images from '../../images';

function News() {
    const TypograhyText = styled(Typography)(({ theme }) => ({
        fontWeight: 400,
        fontSize: 24,
        lineHeight: "140%",
        color: "#00000",
        alignText: "center",
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
                paddingTop: "100px"
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
                    Новости
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
                        sx={{width: "220px",}}
                    >
                        <img src={Images.News_1} alt="" />
                        <TypograhyText>05.07.2022</TypograhyText>
                        <TypographySubtitle>9-10 июля офис “Сходненское” приглашает на Дни открытых дверей</TypographySubtitle>
                    </ItemBox>
                    <ItemBox sx={{width: "220px",}}>
                        <img src={Images.News_2} alt="" />
                        <TypograhyText>05.07.2022</TypograhyText>
                        <TypographySubtitle>Успей купить готовый коттедж в жилом КП</TypographySubtitle>
                    </ItemBox>
                    <ItemBox sx={{width: "220px",}}>
                        <img src={Images.News_3} alt="" />
                        <TypograhyText>04.07.2022</TypograhyText>
                        <TypographySubtitle>9 июля в офисе “Сокол” состоится День открытых дверей</TypographySubtitle>
                    </ItemBox>
                    <ItemBox sx={{width: "220px",}}>
                        <img src={Images.News_4} alt="" />
                        <TypograhyText>01.07.2022</TypograhyText>
                        <TypographySubtitle>Газета “Недвижимость нашего района” офиса “Зеленый проспект”: 70-й выпуск!</TypographySubtitle>
                    </ItemBox>
                </Box>
            </Container>
        </Box>
    )
}

export default News;