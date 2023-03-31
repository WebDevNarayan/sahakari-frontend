import React from "react";
import { FaPhotoVideo } from "react-icons/fa";
import styled from "styled-components";

const Div = styled.div`
  .container {
    border: 1px solid #bdbdbd;
    justify-content: space-evenly;
    display: flex;
    width: 100%;
  }
  div {
    gap: 5px;
    padding-top: 2px;
  }

  img {
    padding: 5px;
    height: 30vh;
    width: 38vh;
    border: 1px solid #bdbdbd;
    border-radius: 8px;
  }
  hr {
    color: red;
    width: 12%;
    border: 2px solid red;
    margin-bottom: 5px;
  }
`;

const Gallery = () => {
  return (
    <Div>
      <h3>
        <FaPhotoVideo /> फोटो ग्यालरी
      </h3>
      <hr />
      <div className="container">
        <div>
          <img
            src="https://images.unsplash.com/photo-1607662562783-9aeb834e23e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1492584328860-c0c7bb599679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1609230528271-2bfad06c6877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1607662562783-9aeb834e23e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
      </div>
    </Div>
  );
};

export default Gallery;
