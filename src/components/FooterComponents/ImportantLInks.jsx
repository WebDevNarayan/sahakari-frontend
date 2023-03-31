import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  color: #ffff;

  ul li {
    list-style-type: none;
  }

  .heading {
    line-height: 1.5;
    font-size: 16px;
    font-weight: 600;
  }

  hr {
    color: red;
    width: 22%;
    border: 2px solid #ffff;
    margin-bottom: 5px;
  }
`;
const ImportantLInks = () => {
  return (
    <Div>
      <p className="heading">महत्वपूर्ण लिंक्स</p>
      <hr />
      <div>
        <ul>
          <li>
            <Link
              to="#"
              style={{
                textDecoration: "none",
                color: "#ffff",
                lineHeight: "1.5",
              }}
            >
              सहकारी कानूनहरू
            </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{
                textDecoration: "none",
                color: "#ffff",
                lineHeight: "1.5",
              }}
            >
              नियमक व्यवस्था
            </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{
                textDecoration: "none",
                color: "#ffff",
                lineHeight: "1.5",
              }}
            >
              सहकारी येन नियम संग्रह{" "}
            </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{
                textDecoration: "none",
                color: "#ffff",
                lineHeight: "1.5",
              }}
            >
              दीघदर्शन/निर्देशकहरू{" "}
            </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{
                textDecoration: "none",
                color: "#ffff",
                lineHeight: "1.5",
              }}
            >
              सहकारी येन तथा नियमवली{" "}
            </Link>
          </li>
          <li>
            <Link
              to="#"
              style={{
                textDecoration: "none",
                color: "#ffff",
                lineHeight: "1.5",
              }}
            >
              सहकारी संगठन{" "}
            </Link>
          </li>
        </ul>
      </div>
    </Div>
  );
};

export default ImportantLInks;
