import React from "react";
import {
  Bio,
  BioContainer,
  BioTitle,
  ItemsWrapper,
  Year,
  BioInfo,
} from "./BioElements";

const BioSection = () => {
  return (
    <Bio>
      <BioContainer>
        <BioTitle>Bio</BioTitle>
        <ItemsWrapper>
          <Year>2001</Year>
          <BioInfo>Born in Pangkal Pinang, Indonesia.</BioInfo>
        </ItemsWrapper>
        <ItemsWrapper>
          <Year>2018 - 2022</Year>
          <BioInfo>
            Completed the Bachelor's Program School of Computer Science at Bina
            Nusantara University.
          </BioInfo>
        </ItemsWrapper>
        <ItemsWrapper>
          <Year>2021 - 2022</Year>
          <BioInfo>
            Internship as Fullstack Web Developer at PT. Bintang Toedjoe.
          </BioInfo>
        </ItemsWrapper>
      </BioContainer>  
    </Bio>
  );
};

export default BioSection;
