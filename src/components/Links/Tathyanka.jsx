import React from "react";
import { FaDownload } from "react-icons/fa";
import styled from "styled-components";
import docx from "../imgs/docx.png";
import pdf from "../imgs/pdf.png";

const Table = styled.table`
  padding: 5px;
  height: 100%;
  width: 100%;

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
const Tathyanka = () => {
  return (
    <Table>
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
          <td className="row">सहकारी झलक, २०७७</td>
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
          <td className="row">विस्तृत सहकारी तथ्या‌ङ्क, २०६८</td>
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
          <td className="row">विस्तृत सहकारी तथ्या‌ङ्क, २०७४</td>
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
          <td className="row"> विस्तृत सहकारी तथ्या‌ङ्क, २०७३</td>
          <td>
            <a href="#">
              <FaDownload />
            </a>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Tathyanka;
