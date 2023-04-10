import { Tabs } from "@mantine/core";
import React from "react";
import styled from "styled-components";
import { ImHammer2 } from "react-icons/im";
import SahakariSanstha from "../components/Links/SahakariSanstha";
import Suchana from "../components/Links/Suchana";
import UpayogiSamagri from "../components/Links/UpayogiSamagri";
import { Link } from "react-router-dom";

const Div = styled.div`
  .heading {
    font-size: 16px;
    font-weight: 600;
  }

  hr {
    color: red;
    width: 30%;
    border: 2px solid red;
    margin-bottom: 5px;
  }
`;
const Laws = () => {
  return (
    <Div>
      <p className="heading">
        <ImHammer2 /> सहकारी कानुन
      </p>
      <hr />
      <div>
        {" "}
        <Tabs
          defaultValue="sahakari"
          style={{
            border: "2px solid #b4b4b4",
            paddingInline: "10px",
            marginRight: "5px",
          }}
        >
          <Tabs.List>
            <Tabs.Tab value="sahakari">नियमक ब्यबस्था</Tabs.Tab>
            <Tabs.Tab value="upayog">सहकारी नियम संग्रह</Tabs.Tab>
            <Tabs.Tab value="suchana">निर्देशिकाहरु</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="sahakari" pt="xs">
            <SahakariSanstha />
          </Tabs.Panel>

          <Tabs.Panel value="upayog" pt="xs">
            <UpayogiSamagri />
          </Tabs.Panel>

          <Tabs.Panel value="suchana" pt="xs">
            <Suchana />
          </Tabs.Panel>
        </Tabs>
      </div>
    </Div>
  );
};

export default Laws;
