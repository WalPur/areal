import React, { Component } from "react";
import Slider from "react-slick";

import { MyText, MyTextSubtitle, MyTextTitle } from "../text";

import Images from "../../images";

function Slider() {
    const data = [
        {
            img: {Images.Services_1},
            title: "Выбирайте с уверенностью!",
            text: "В нашей базе только проверенные квартиры и комнаты Якутска",
        },
        {
            img: {Images.Services_2},
            title: "Выбирайте с уверенностью!",
            text: "В нашей базе только проверенные квартиры и комнаты Якутска",
        },
        {
            img: {Images.Services_3},
            title: "Выбирайте с уверенностью!",
            text: "В нашей базе только проверенные квартиры и комнаты Якутска",
        },
        {
            img: {Images.Services_4},
            title: "Выбирайте с уверенностью!",
            text: "В нашей базе только проверенные квартиры и комнаты Якутска",
        },
        {
            img: {Images.Services_5},
            title: "Выбирайте с уверенностью!",
            text: "В нашей базе только проверенные квартиры и комнаты Якутска",
        },
        {
            img: {Images.Services_6},
            title: "Выбирайте с уверенностью!",
            text: "В нашей базе только проверенные квартиры и комнаты Якутска",
        },
    ]
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div>
        <MyTextTitle>Услуги, спецпредложения и мероприятия</MyTextTitle>
        <Slider {...settings}>
            {data.map((item, index) => (
                <Box key={index}>
                    <img src={item.img}/>
                    <MyTextSubtitle>{item.title}</MyTextSubtitle>
                    <MyText>{item.text}</MyText>
                </Box>
            ))}
        </Slider>
      </div>
    );
}

export default Slider;