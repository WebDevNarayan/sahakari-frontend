import React from "react";
import styled from "styled-components";
import { Contact, ImportantLinks, Location } from "../FooterComponents";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  background: #0064a2;
  height: 60vh;

  div {
    margin-top: 1rem;
    padding: 0px 10px;
    border-radius: 5px;
    height: 50vh;
    width: 100%;
  }
`;
const ContactFooter = () => {
  return (
    <Div>
      <div className="contact">
        <Contact />
      </div>
      <div className="location">
        <Location />
      </div>
      <div className="links">
        <ImportantLinks />
      </div>
    </Div>
  );
};

export default ContactFooter;
