import React from "react";
import {
  Stack,
  StackContainer,
  StackWrapper,
  StackTitle,
  StackInfo,
  StackListWrapper,
  StackList,
} from "./StackElements";

const StackSection = ({ ...rest }) => {
  return (
    <Stack>
      <StackContainer>
        <StackWrapper>
          <StackTitle big={true}>My Stack</StackTitle>
          <StackInfo>
            Here's my tech stacks / frameworks / programming languages that i
            working with and some couple of things that i interested in.
          </StackInfo>
        </StackWrapper>
        <StackWrapper>
          <StackTitle>Languages</StackTitle>
          <StackListWrapper>
            {rest.languages.map((lang, index) => (
              <StackList key={index}>{lang}</StackList>
            ))}
          </StackListWrapper>
        </StackWrapper>
        <StackWrapper>
          <StackTitle>Backend</StackTitle>{" "}
          <StackListWrapper>
            {rest.be.map((be, index) => (
              <StackList key={index}>{be}</StackList>
            ))}{" "}
          </StackListWrapper>
        </StackWrapper>
        <StackWrapper>
          <StackTitle>Frontend</StackTitle>
          <StackListWrapper>
            {rest.fe.map((fe, index) => (
              <StackList key={index}>{fe}</StackList>
            ))}{" "}
          </StackListWrapper>
        </StackWrapper>
        <StackWrapper>
          <StackTitle>Interest</StackTitle>
          <StackListWrapper>
            {rest.interest.map((interest, index) => (
              <StackList key={index}>{interest}</StackList>
            ))}{" "}
          </StackListWrapper>
        </StackWrapper>
      </StackContainer>
    </Stack>
  );
};

export default StackSection;
