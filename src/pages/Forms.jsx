import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;

  div {
    background: #006600;
    margin: 2px;
    padding: 20px;
    text-align: center;
    border: 2px solid grey;
    border-radius: 5px;
    cursor: pointer;
    transform: translateX(0px);
    transition: 0.2s all;
  }

  .form:hover {
    box-shadow: 2px 2px 4px 2px #5f4888ff;
    background: #009500;
    transform: translateX(1px);
  }
  div a {
    color: #fff;

    text-decoration: none;
  }
`;

const Forms = () => {
  return (
    <Div>
      <div className="form">
        <a href="/registeration">Sahakari Form</a>
      </div>
      <div className="form">
        <a href="/registeration">Form2</a>
      </div>
      <div className="form">
        <a href="/registeration">Form3</a>
      </div>
      <div className="form">
        <a href="/registeration">Form3</a>
      </div>
    </Div>
  );
};

export default Forms;
