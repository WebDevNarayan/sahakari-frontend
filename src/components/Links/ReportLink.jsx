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
const ReportLink = () => {
  return (
    <Div>
      <div className="container">
        <div>
          <img src={nepal_logo} alt="logo" />
        </div>
        <div>
          <h5>
            {" "}
            <a href="#">
              बैदेशिक अध्ययन/ तालिम छात्रवृत्तिमा मनोनयन गर्ने सम्बन्धमा ।
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
              बैदेशिक अध्ययन/ तालिम छात्रवृत्तिमा मनोनयन गर्ने सम्बन्धमा ।
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
            <a href="#">तथ्याङ्क उपलव्ध गराईदिने Format</a>
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
              “राष्ट्रिय प्रजातन्त्र दिवस, २०७९” भव्यताका साथ मनाउऔं
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
            <a href="#">वित्तिय साक्षरता सम्बन्धमा</a>
          </h5>
        </div>
      </div>
    </Div>
  );
};

export default ReportLink;
