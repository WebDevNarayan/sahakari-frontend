import React from "react";
import styled from "styled-components";
import nepal_logo from "../imgs/nepal_logo.png";

const Div = styled.div`
  border: 1px solid #c7c7c7;

  .container {
    border-left: 1px solid #c7c7c7;
    border-right: 1px solid #c7c7c7;
  }
  div {
    display: flex;
    text-align: justify;
    padding: 2px;
  }
  h5 > a {
    text-align: justify;
    font-size: 11px;
    color: black;
  }

  img {
    height: 30px;
  }
`;
const Paripatra = () => {
  return (
    <Div>
      <div className="container">
        <div>
          <img src={nepal_logo} alt="logo" />
        </div>
        <div>
          <h5>
            {" "}
            <a href="#">सहकारी संस्थाका लागि मार्गदर्शन एवं निर्देशनहरु </a>
          </h5>
        </div>
      </div>
      <div className="container">
        <div>
          {" "}
          <img src={nepal_logo} alt="logo" />
        </div>
        <div>
          <h5>
            {" "}
            <a href="#">परिपत्र सम्बन्धमा । </a>
          </h5>
        </div>
      </div>
      <div className="container">
        <div>
          {" "}
          <img src={nepal_logo} alt="logo" />
        </div>
        <div>
          <h5>
            {" "}
            <a href="#">
              सहकारी संस्थाको लेखापरीक्षण निर्देशिका, २०७५ पठाएको सम्बन्धमा
            </a>
          </h5>
        </div>
      </div>
      <div className="container">
        <div>
          {" "}
          <img src={nepal_logo} alt="logo" />
        </div>
        <div>
          <h5>
            {" "}
            <a href="#">
              साझा (सहकारी) संस्थाबाट साना किसानले लिएको ऋणको विवरण सम्बन्धमा{" "}
            </a>
          </h5>
        </div>
      </div>
    </Div>
  );
};

export default Paripatra;
