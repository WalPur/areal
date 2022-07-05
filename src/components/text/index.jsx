import React from "react";

import { Typography } from "@mui/material";

import { styled } from "@mui/system";

const MyTextTitle = styled(Typography)(({ theme }) => ({
    fontSize: 32,
    lineHeight: "140%",
    fontWeight: 700,
    [theme.breakpoints.down("md")]: {
        fontSize: 24,
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 18,
    }
}));

const MyTextSubtitle = styled(Typography)(({ theme }) => ({
    fontSize: 24,
    lineHeight: "140%",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
        fontSize: 20,
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 16,
    }
}));

const MyText = styled(Typography)(({ theme }) => ({
    fontSize: 16,
    lineHeight: "140%",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
        fontSize: 13,
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 10,
    }
}));

export { MyTextTitle, MyTextSubtitle, MyText };