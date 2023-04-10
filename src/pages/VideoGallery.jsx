import { AspectRatio } from "@mantine/core";
import React from "react";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/layouts/Button";

const Div = styled.div`
  .heading {
    font-size: 16px;
    font-weight: 600;
  }
  .btn {
    color: white;
    margin-top: 5px;
    align-items: baseline;
    background: #0064a2;
    padding: 4px;
    border-radius: 4px;
    float: right;
  }
  hr {
    background-color: red;
    width: 10vw;
    border: 2px solid red;
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 850px) {
    hr {
      width: 100vw;
    }
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
      <Link to="http://deoc.gov.np/video-gallery">
        {" "}
        <Button />
      </Link>
    </Div>
  );
};

export default VideoGallery;
