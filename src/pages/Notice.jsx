import React from "react";
import styled from "styled-components";
import Laws from "./Laws";
import News from "./News";
import Publication from "./Publication";
import VideoGallery from "./VideoGallery";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;

  .box {
    flex: 50%;
  }
  @media screen and (max-width: 992px) {
    .box {
      flex: 50%;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const Notice = () => {
  return (
    <Div>
      <div className="box law">
        <Laws />
      </div>
      <div className="box news">
        <News />
      </div>
      <div className="box publications">
        <Publication />
      </div>
      <div className="box videos">
        <VideoGallery />
      </div>
    </Div>
  );
};

export default Notice;
