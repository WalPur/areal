import React, { Component } from "react";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Box } from "@mui/material";

import { MyText, MyTextSubtitle, MyTextTitle } from "../text";

import Images from "../../images";

const SliderServices = () => {
    const data = [
        {
            img: Images.Services_1,
            title: "Выбирайте с уверенностью!",
            text: "В нашей базе только проверенные квартиры и комнаты Якутска",
        },
        {
            img: Images.Services_2,
            title: "Выбирайте с уверенностью!",
            text: "В нашей базе только проверенные квартиры и комнаты Якутска",
        },
        {
            img: Images.Services_3,
            title: "Выбирайте с уверенностью!",
            text: "В нашей базе только проверенные квартиры и комнаты Якутска",
        },
        {
            img: Images.Services_4,
            title: "Выбирайте с уверенностью!",
            text: "В нашей базе только проверенные квартиры и комнаты Якутска",
        },
        {
            img: Images.Services_5,
            title: "Выбирайте с уверенностью!",
            text: "В нашей базе только проверенные квартиры и комнаты Якутска",
        },
        {
            img: Images.Services_6,
            title: "Выбирайте с уверенностью!",
            text: "В нашей базе только проверенные квартиры и комнаты Якутска",
        },
    ]
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 3,
        variableWidth: false,
        swipeToSlide: true,
    };
    return (
      <div>
        <MyTextTitle sx={{ mt: 5.5, mb: 9 }}>Услуги, спецпредложения и мероприятия</MyTextTitle>
        <Slider {...settings}>
            {data.map((item, index) => (
                <Box key={index}
                    sx={{
                        maxWidth: 360,
                        mb: 3,
                    }}
                >
                    <img src={item.img} style={{ marginBottom: 43 }}/>
                    <MyTextSubtitle sx={{ mb: 1.4 }}>{item.title}</MyTextSubtitle>
                    <MyText>{item.text}</MyText>
                </Box>
            ))}
        </Slider>
      </div>
    );
}

export default SliderServices;