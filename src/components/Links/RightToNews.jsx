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
const RightToNews = () => {
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
            सूचनाको हक सम्वन्धी ऐन, २०६४ को दफा ५(३) र नियमावलीको नियम ३ बमोजिम
            सार्वजनिक गरिएको विवरण (२०७९।०४।०१ देखि २०७९।०६।३१ सम्मका
            गतिविधिहरु))
          </td>
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
          <td className="row">
            सूचनाको हक सम्वन्धी ऐन, २०६४ को दफा ५(३) र नियमावलीको नियम ३ बमोजिम
            सार्वजनिक गरिएको विवरण (२०७९।०१।०१ देखि २०७९।०३।३१ सम्मका
            गतिविधिहरु))
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
            सूचनाको हक सम्वन्धी ऐन, २०६४ को दफा ५(३) र नियमावलीको नियम ३ बमोजिम
            सार्वजनिक गरिएको विवरण (२०७८।१०।०१ देखि २०७८।१२।३१ सम्मका
            गतिविधिहरु))
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
            सूचनाको हक सम्वन्धी ऐन, २०६४ को दफा ५(३) र नियमावलीको नियम ३ बमोजिम
            सार्वजनिक गरिएको विवरण (२०७७।०४।०१ देखि २०७७।०६।३० सम्मका मूख्य
            मुख्य गतिविधिहरु))
          </td>
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

export default RightToNews;
