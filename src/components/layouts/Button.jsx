import React from "react";
import styled from "styled-components";

const Div = styled.div`
  .btn {
    color: white;
    margin-top: 5px;
    align-items: baseline;
    background: #0064a2;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn:hover {
    background: red;
    color: white;
  }
`;
const Button = () => {
  return (
    <Div>
      <button className="btn">थप पढ्नु होस्</button>
    </Div>
  );
};

export default Button;
