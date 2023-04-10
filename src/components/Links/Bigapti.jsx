import React from "react";
import styled from "styled-components";
import nepal_logo from "../imgs/nepal_logo.png";
import Button from "../layouts/Button";
import { Link } from "react-router-dom";

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
const Bigapti = () => {
  return (
    <Div>
      <div className="container">
        <div>
          <img src={nepal_logo} alt="logo" />
        </div>
        <div>
          <h5>
            {" "}
            <a href="#">प्रेस विज्ञप्ति</a>
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
            <a href="#">प्रेस विज्ञप्ति</a>
          </h5>
        </div>
      </div>
      <Link to="http://deoc.gov.np/notice-board/4/2017/83523699">
        <Button />
      </Link>
    </Div>
  );
};

export default Bigapti;
