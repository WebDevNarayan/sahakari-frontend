import React from "react";
import { FaDownload } from "react-icons/fa";
import styled from "styled-components";
import docx from "../imgs/docx.png";
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
const SahakariSanstha = () => {
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
            <td className="row">सदस्य केन्द्रीयता सूचकाङ्क गणना</td>
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
            <td className="row">
              Procedures for the Unification and Division of Co-operative
              Societies and Unions 2013
            </td>
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
            <td className="row">कानूनी व्यवस्था सम्बन्धमा</td>
            <td>
              <a href="#">
                <FaDownload />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <Link>
        <Button />
      </Link>
    </Div>
  );
};

export default SahakariSanstha;
