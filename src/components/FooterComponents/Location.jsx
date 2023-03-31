import { AspectRatio } from "@mantine/core";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import styled from "styled-components";

const Div = styled.div`
  color: white;

  .heading {
    font-size: 16px;
    font-weight: 600;
  }
  hr {
    width: 50%;
    border: 2px solid white;
  }
  p {
    line-height: 1.5;
  }
`;

const Location = () => {
  return (
    <Div>
      <p className="heading">
        <FaLocationArrow /> गुगल म्यापमा विभाग
        <hr />
      </p>
      <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14064.179172675626!2d83.98316444605123!3d28.205951648595676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595c84afd2907%3A0xfd737dbf563bf94e!2z4KSq4KS-4KWH4KSW4KSw4KS-IOCksOCkvuClh-Ckr-CksiDgpKzgpJrgpKQg4KSk4KSl4KS-IOCki-CkoyDgpLjgpLngpJXgpL7gpLDgpYAg4KS44KS44KWN4KSl4KS-IOCksuCkv-CkruCkv-Ckn-Clh-CkoSBQb2toYXJhIFJveWFsIFNhdmluZyAmIENyZWRpdCBDby1PcGVyYXRpdmUgU29jaWV0eSBMaW1pdGVk!5e0!3m2!1sen!2sru!4v1679827801388!5m2!1sen!2sru"
          style={{
            height: "250px",
            width: "300px",
            border: "0",
          }}
        ></iframe>
      </AspectRatio>
    </Div>
  );
};

export default Location;
