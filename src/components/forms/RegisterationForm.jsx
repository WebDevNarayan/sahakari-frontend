import { FileInput, Flex, NumberInput, TextInput, Title } from "@mantine/core";
import React from "react";

const RegisterationForm = () => {
  return (
    <Flex miw={400} direction="row" wrap="wrap" justify="center" align="center">
      <form className="mt-10">
        <Title>Sahakari Registeration Form</Title>
        <div className="mt-5">
          <TextInput
            label="Company Name"
            placeholder="company name"
            withAsterisk
          />
          <TextInput
            label="Company Address"
            placeholder="company address"
            withAsterisk
          />
          <TextInput label="PAN No." placeholder="pan number" withAsterisk />
          <NumberInput label="PAN No." placeholder="pan number" withAsterisk />
          <div>
            <FileInput
              placeholder="Upload your file here"
              label="Registeration Certificate"
              withAsterisk
            />
          </div>
          <div>
            <FileInput
              placeholder="Upload your signature here"
              label="Upload Signature"
              withAsterisk
            />
          </div>
          <div>
            <FileInput
              placeholder="Upload PP sized photo here"
              label="Upload photo"
              withAsterisk
            />
          </div>
        </div>
        <button className="to-blue-500" type="submit">
          Submit
        </button>
      </form>
    </Flex>
  );
};

export default RegisterationForm;
