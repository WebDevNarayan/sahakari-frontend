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
const Bhuktani = () => {
  return (
    <Div>
      <div className="container">
        <div>
          <h5>
            {" "}
            <a href="#">माफ गर्नुहोला ! कुनै विवरण उपलब्ध छैन । </a>
          </h5>
        </div>
      </div>
    </Div>
  );
};

export default Bhuktani;
