import React from "react";
import { FaDownload } from "react-icons/fa";
import styled from "styled-components";
import pdf from "../imgs/pdf.png";
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
const Samagri = () => {
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
            <td className="row"> NRA_REPORT_2020_Summarized</td>
            <td>
              <a href="#">
                <FaDownload />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <img src={pdf} height={20} alt="" />
            </td>
            <td className="row">goAML सँग सम्बन्धित सामाग्रीको लिंक</td>
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
            <td className="row">सूचना तथा सन्दशहरु</td>
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
            <td className="row"> बारम्बार सोधिने प्रश्नहरु (FAQ)</td>
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
            <td className="row"> Cooperative Bulletin</td>
            <td>
              <a href="#">
                <FaDownload />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="http://deoc.gov.np/downloadsdetail/4/2017/17421968">
        <Button />
      </Link>
    </Div>
  );
};

export default Samagri;
