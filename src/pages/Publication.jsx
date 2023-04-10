import { Tabs } from "@mantine/core";
import React from "react";
import { FaDownload } from "react-icons/fa";
import styled from "styled-components";
import RightToNews from "../components/Links/RightToNews";
import Samagri from "../components/Links/Samagri";
import Tathyanka from "../components/Links/Tathyanka";

const Div = styled.div`
  .heading {
    font-size: 16px;
    font-weight: 600;
  }

  hr {
    color: red;
    width: 18%;
    border: 2px solid red;
    margin-bottom: 5px;
  }
`;
const Publication = () => {
  return (
    <Div>
      <p className="heading">
        <FaDownload /> प्रकाशन
      </p>
      <hr />
      <Tabs
        defaultValue="sahakari"
        style={{
          border: "2px solid #b4b4b4",
          paddingInline: "10px",
          marginRight: "5px",
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="sahakari">सहकारी संस्था तथ्यांक</Tabs.Tab>
          <Tabs.Tab value="upayog">उपयोगी सामग्री</Tabs.Tab>
          <Tabs.Tab value="suchana">सूचनाको हक्</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="sahakari" pt="xs">
          <Tathyanka />
        </Tabs.Panel>

        <Tabs.Panel value="upayog" pt="xs">
          <Samagri />
        </Tabs.Panel>

        <Tabs.Panel value="suchana" pt="xs">
          <RightToNews />
        </Tabs.Panel>
      </Tabs>
    </Div>
  );
};

export default Publication;
