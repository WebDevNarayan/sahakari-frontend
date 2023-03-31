import React from "react";
import { Link } from "react-router-dom";
import nepal_logo from "../imgs/nepal_logo.png";
import flag from "../imgs/flag.gif";
import styled from "styled-components";

const StyledDiv = styled.div`
  background: linear-gradient(to top, #ffffff 0%, #ccffff 33%);
  display: flex;
  justify-content: space-between;
  .logo {
    margin-left: 15px;
  }
  h3 {
    text-align: center;
  }
  /* .Heading {
    margin: 15px 500px 15px 0px;
  } */
  .red-heading {
    color: crimson;
  }
  .grey-heading {
    color: grey;
  }
  .flag {
    margin-right: 10px;
  }
`;
const Header = () => {
  return (
    <StyledDiv className="header">
      <div className="logo">
        <Link to="/">
          <img src={nepal_logo} alt="nepal_logo" height={100} width={100} />
        </Link>
      </div>
      <div>
        <h3 className="Heading">
          <span className="red-heading">
            नेपाल सरकार <br />
            भूमि, सहकारी तथा गरिबी उन्मूलन मन्त्रालय
            <br />
          </span>
          <span className="grey-heading">सहकारी विभाग</span>
        </h3>
      </div>
      <div className="flag">
        <img src={flag} alt="flag" height={80} width={80} />
      </div>
    </StyledDiv>
  );
};

export default Header;
