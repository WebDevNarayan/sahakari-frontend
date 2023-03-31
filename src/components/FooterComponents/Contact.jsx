import React from "react";
import { FaFax, FaLocationArrow, FaPhoneAlt, FaTty } from "react-icons/fa";
import { MdAlternateEmail, MdContactPhone } from "react-icons/md";
import styled from "styled-components";

const Div = styled.div`
  color: white;

  .heading {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    line-height: 1.5;
  }
  hr {
    width: 38%;
    border: 2px solid white;
  }
`;

const Contact = () => {
  return (
    <Div>
      <p className="heading">
        <MdContactPhone /> सम्पर्क विवरण
        <hr />
      </p>
      <p>
        <FaLocationArrow /> <label htmlFor="ठेगाना :">ठेगाना :</label> नयाँ
        बानेश्वर, काठमाण्डौँ, नेपाल
      </p>
      <p>
        <FaPhoneAlt /> <label htmlFor="सम्पर्क नं. :">सम्पर्क नं. :</label>{" "}
        +९७७-१-४४६५३६२, ४४६११७७
      </p>
      <p>
        <FaFax /> <label htmlFor="फ्याक्स नं. :-">फ्याक्स नं. :-</label>
      </p>
      <p>
        <FaTty /> <label htmlFor="CoPoMIS Unit:">CoPoMIS Unit:</label>{" "}
        ०१४४६५२५१/ ०१४४६५२५२
      </p>
      <p>
        <MdAlternateEmail /> <label htmlFor="इमेल :">इमेल :</label>{" "}
        sahakaribivag@gmail.com । info@deoc.gov.np ।
        sahakaribivag.copomis@gmail.com
      </p>
      <p>
        <label htmlFor="वेव :">वेव :</label> http://deoc.gov.np
      </p>
    </Div>
  );
};

export default Contact;
