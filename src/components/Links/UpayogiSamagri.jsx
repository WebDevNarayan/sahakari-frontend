import React from "react";
import { FaDownload } from "react-icons/fa";
import pdf from "../imgs/pdf.png";
import docx from "../imgs/docx.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../layouts/Button";

const Div = styled.div`
  table {
    padding: 5px;
    height: 100%;
    width: 100%;
  }

  td {
    padding: 5px;
    font-size: 12px;
    text-align: left;
    border-top: 1px solid #d7d7d7;
  }
  th {
    text-align: left;
  }
`;

const UpayogiSamagri = () => {
  return (
    <Div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>शीर्षक</th>
            <th scope="col">डाउनलोड</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={pdf} height={20} alt="pdf" />
            </td>
            <td className="row">सहकारी ऐन, २०७४</td>
            <td>
              <a href="#">
                <FaDownload />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <img src={docx} height={20} alt="" />
            </td>
            <td className="row">राष्ट्रिय सहकारी नीति, २०६९</td>
            <td>
              <a href="#">
                <FaDownload />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <img src={pdf} height={20} alt="pdf" />
            </td>
            <td className="row">सहकारी नियमावली, २०७५</td>
            <td>
              <a href="#">
                <FaDownload />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="http://deoc.gov.np/cooprative-laws/2/2019/11753074">
        <Button />
      </Link>
    </Div>
  );
};

export default UpayogiSamagri;
