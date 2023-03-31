import { Tabs } from "@mantine/core";
import React from "react";
import { ImNewspaper } from "react-icons/im";
import styled from "styled-components";
import Bhuktani from "../components/Links/Bhuktani";
import Bigapti from "../components/Links/Bigapti";
import Paripatra from "../components/Links/Paripatra";
import ReportLink from "../components/Links/ReportLink";
import Sandesh from "../components/Links/Sandesh";

const Div = styled.div`
  .heading {
    font-size: 16px;
    font-weight: 600;
  }

  hr {
    color: red;
    width: 22%;
    border: 2px solid red;
    margin-bottom: 5px;
  }
`;
const News = () => {
  return (
    <Div>
      <p className="heading">
        <ImNewspaper /> सूचना पाटी
      </p>
      <hr />
      <Tabs
        defaultValue="suchana"
        style={{
          border: "2px solid #b4b4b4",
          paddingInline: "10px",
          marginRight: "5px",
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="suchana">सूचना</Tabs.Tab>
          <Tabs.Tab value="bigapti">बिज्ञप्ति</Tabs.Tab>
          <Tabs.Tab value="bhuktani">भुक्तानी</Tabs.Tab>
          <Tabs.Tab value="paripatra">परिपत्र</Tabs.Tab>
          <Tabs.Tab value="sandesh">सन्देशहरु</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="suchana" pt="xs">
          <ReportLink />
        </Tabs.Panel>
        <Tabs.Panel value="bigapti" pt="xs">
          <Bigapti />
        </Tabs.Panel>
        <Tabs.Panel value="bhuktani" pt="xs">
          <Bhuktani />
        </Tabs.Panel>
        <Tabs.Panel value="paripatra" pt="xs">
          <Paripatra />
        </Tabs.Panel>
        <Tabs.Panel value="sandesh" pt="xs">
          <Sandesh />
        </Tabs.Panel>
      </Tabs>
    </Div>
  );
};

export default News;
