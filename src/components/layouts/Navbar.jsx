import React from "react";
import { FaHome } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";

const Nav = styled.nav`
  ul {
    list-style: none;
    background: #0064a2;
  }
  ul li {
    height: 42px;
    color: white;
    display: inline-block;
    position: relative;
  }
  ul li a {
    display: block;
    padding: 10px 15px;
    color: white;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
  }

  ul li ul.dropdown li {
    display: block;
  }

  ul li ul.dropdown {
    margin-left: 0;
    width: 100%;
    background: #b9b9b9;
    position: absolute;
    z-index: 999;
    display: none;
    font-size: 14px;
  }

  ul li a:hover {
    color: black;
    background: #ffffff;
  }

  ul li:hover ul.dropdown {
    display: block;
  }

  @media only screen and (max-width: 850px) {
    /*Big smartphones [426px -> 600px]*/
    .menu-link {
      display: none;
    }
  }
`;
const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href="/">
            <FaHome />
          </a>
        </li>
        <li className="menu-link">
          <a href="">
            हाम्रो बारेमा <IoMdArrowDropdown />
          </a>
          <ul className="dropdown">
            <li>
              <a href="https://deoc.gov.np/content/324/2021/97283136/">
                संगठन संरचना
              </a>
            </li>
            <li>
              <a href="https://deoc.gov.np/content/320/2019/40627151/">
                नागरिक वादपत्र
              </a>
            </li>
            <li>
              <a href="https://deoc.gov.np/content/290/2017/22665478/">
                विकासक्रम
              </a>
            </li>
            <li>
              <a href=""> विकास</a>
            </li>
            <li>
              <a href="">कार्य</a>
            </li>
            <li>
              <a href="">रणनीति</a>
            </li>
            <li>
              <a href="">कर्मचारी</a>
            </li>
          </ul>
        </li>
        <li className="menu-link">
          <a href="https://deoc.gov.np/content/259/2017/55536387/">
            हाम्रो विचार
          </a>
        </li>
        <li className="menu-link">
          <a href="">
            सहकारी कानूनहरू <IoMdArrowDropdown />
          </a>
          <ul className="dropdown">
            <li>
              <a href="">नियमक व्यवस्था</a>
            </li>
            <li>
              <a href="">सहकारी येन नियम संग्रह</a>
            </li>

            <li>
              <a href="">दीघदर्शन/निर्देशकहरू</a>
            </li>
          </ul>
        </li>
        <li className="menu-link">
          <a href="">
            प्रदेशको स्रोत <IoMdArrowDropdown />
          </a>
          <ul className="dropdown">
            <li>
              <a href="">परिपत्र</a>
            </li>
            <li>
              <a href="">सहकारी येन तथा नियमवली</a>
            </li>
            <li>
              <a href="">नियमक व्यवस्था</a>
            </li>
            <li>
              <a href="">नमुना बजट कार्यक्रम</a>
            </li>
            <li>
              <a href="">साइचेक सामग्री</a>
            </li>
            <li>
              <a href="">सहकारी तथा गरिबी निवारण</a>
            </li>
            <li>
              <a href="">सहकारी निर्वाचन</a>
            </li>
          </ul>
        </li>
        <li className="menu-link">
          <a href="">
            प्रकाशनहरू <IoMdArrowDropdown />
          </a>
          <ul className="dropdown">
            <li>
              <a href="">सहकारी संगठन</a>
            </li>
            <li>
              <a href="">अन्य सामग्री</a>
            </li>
            <li>
              <a href="">सूचना हक्</a>
            </li>
          </ul>
        </li>
        <li className="menu-link">
          <a href="">
            समाचार <IoMdArrowDropdown />
          </a>
          <ul className="dropdown">
            <li>
              <a href="">सूचना</a>
            </li>
            <li>
              <a href="">विज्ञप्ति</a>
            </li>
            <li>
              <a href="">भुक्तानीका लागि प्राप्त बिल</a>
            </li>
            <li>
              <a href="">परिपत्र</a>
            </li>
            <li>
              <a href="">सन्देशहरू</a>
            </li>
          </ul>
        </li>
        <li className="menu-link">
          <a href="">
            तस्वीर तथा भिडियो ग्यालरी <IoMdArrowDropdown />
          </a>
          <ul className="dropdown">
            <li>
              <a href="">फोटो ग्यालरी</a>
            </li>
            <li>
              <a href="">भिडियो ग्यालरी</a>
            </li>
            <li>
              <a href="">आडियो ग्यालरी</a>
            </li>
          </ul>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
