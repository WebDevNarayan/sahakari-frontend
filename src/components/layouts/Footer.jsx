import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background: #787878;
  text-align: center;
  height: 7vh;
  p {
    padding: 10px;
    font-size: 12px;
    color: #ffff;
  }
`;
const Footer = () => {
  return (
    <Div>
      <p>
        वेवसाइट अन्तिम पटक अद्यावधिक गरिएको मिति : Wednesday 15th of March 2023
        01:50:13 PM
      </p>
    </Div>
  );
};

export default Footer;
