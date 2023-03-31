import { AspectRatio } from "@mantine/core";
import React from "react";
import { FaVideo } from "react-icons/fa";
import styled from "styled-components";

const Div = styled.div`
  .heading {
    font-size: 16px;
    font-weight: 600;
  }
  hr {
    background-color: red;
    width: 30%;
    border: 2px solid red;
    margin-bottom: 5px;
  }
`;
const VideoGallery = () => {
  return (
    <Div>
      <p className="heading">
        <FaVideo /> भिडियो ग्यालरी
      </p>
      <hr />
      <AspectRatio
        ratio={16 / 9}
        style={{
          border: "2px solid #b4b4b4",
          paddingInline: "10px",
          marginRight: "5px",
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-acgTd1dqp8"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </AspectRatio>
    </Div>
  );
};

export default VideoGallery;
