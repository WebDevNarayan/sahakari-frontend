import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.3);

  .title {
    position: absolute;
    background: red;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 24px;
    color: white;
    font-weight: bold;
    z-index: 200;
  }
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    /* transform: translateX(-1083px); */
    animation: scroll 25s infinite linear;
  }
  ul li {
    white-space: nowrap;
    padding: 10px 24px;
    color: #494949;
  }
  ul li::after {
    content: "";
    width: 1px;
    height: 100%;
    background: #b8b8b8;
    position: absolute;
    top: 0;
    right: 0;
  }
  ul li::last-child::after {
    display: none;
  }

  @keyframes scroll {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
const NewsScroller = () => {
  return (
    <Div>
      <div className="title">Breaking News</div>
      <ul>
        <li>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, quas.
        </li>
        <li>Lorem ipsum dolor odio.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
      </ul>
    </Div>
  );
};

export default NewsScroller;
