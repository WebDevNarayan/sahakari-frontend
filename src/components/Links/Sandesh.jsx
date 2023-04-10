import React from "react";
import styled from "styled-components";
import nepal_logo from "../imgs/nepal_logo.png";
import { Link } from "react-router-dom";
import Button from "../layouts/Button";

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
const Sandesh = () => {
  return (
    <Div>
      <div className="container">
        <div>
          <h5>
            {" "}
            <a href="#">माफ गर्नुहोला ! कुनै विवरण उपलब्ध छैन ।</a>
          </h5>
        </div>
      </div>
      <Link to="http://deoc.gov.np/notice-board/11/2021/76382796">
        <Button />
      </Link>
    </Div>
  );
};

export default Sandesh;
