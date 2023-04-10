import { Carousel } from "@mantine/carousel";
import { createStyles, getStylesRef } from "@mantine/core";
import React from "react";
// import NewsScroller from "./NewsScroller";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;

  @media only screen and (max-width: 1000px) {
    min-width: 100vw;
  }
`;
const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  root: {
    "&:hover": {
      [`& .${getStylesRef("controls")}`]: {
        opacity: 1,
      },
    },
  },
}));
const ImgCarousel = () => {
  const { classes } = useStyles();
  return (
    <Div>
      <p>
        <a href="" style={{ color: "red", padding: "5px", margin: "5px" }}>
          पुराना साझा (सहकारी) संघ/संस्थामा रेको ऋण तथा रोक्का जग्गाको विवरण
          पठाउने सम्बन्धी अत्यन्त जरूरी सूचना
        </a>
      </p>
      <Carousel
        maw="full"
        mx="auto"
        withIndicators
        height={400}
        slideGap="md"
        align="start"
        classNames={classes}
      >
        <Carousel.Slide>
          <img
            height="100%"
            width="100%"
            src="https://deoc.gov.np/slider/Welcomeregister2.jpg"
            alt="img1"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            height="100%"
            width="100%"
            src="https://deoc.gov.np/slider/registrar%20juyu_1650260630.JPG"
            alt="img2"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            height="100%"
            width="100%"
            src="https://deoc.gov.np/slider/mayako%20chino_1649059069.jpg"
            alt="img3"
          />
        </Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
      {/* <NewsScroller /> */}
    </Div>
  );
};

export default ImgCarousel;
