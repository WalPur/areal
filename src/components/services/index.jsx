import React from "react";

import { Box, Container, Typography } from "@mui/material";
import SliderServices from "../slider";
import styled from "@mui/system";

import { MyText, MyTextSubtitle, MyTextTitle } from "../text";

function Services() {
    
    return(
        <Box>
            <Container maxWidth="lg" sx={{ mb: 8.5 }}>
                <SliderServices/>
            </Container>
        </Box>
    )
}

export default Services;