import React from "react";
import { FaDownload } from "react-icons/fa";
import pdf from "../imgs/pdf.png";
import docx from "../imgs/docx.png";
import styled from "styled-components";

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

const Suchana = () => {
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
          <td className="row">
            सहकारी सम्बन्धी प्रशिक्षणको लागि तयार गरिएको पाठ्यक्रम Updated
            2079/08/20
          </td>
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
            सहकारी संस्थालाई अनुदान उपलब्ध गराउने सम्वन्धी कार्यविधि, २०७९
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
          <td className="row">
            सम्पत्ति शुद्धीकरण निवारण सम्बन्धी सहकारी सङ्घसंस्थालाई जारी गरिएको
            निर्देशन, २०७४
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
          <td className="row">
            सहकारी तथा गरिबी सम्बन्धी व्यवस्थापन सूचना प्रणाली संचालन
            कार्यविधि,२०७७
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
          <td className="row">सहकारी एकीकरण तथा बिभाजन निर्देशिका</td>
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

export default Suchana;
