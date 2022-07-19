import styled from "@emotion/styled";
import { FaPlus } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";

export const Work = styled.section`
  width: 100%;
  padding-block: 2em;
`;

export const WorkContainer = styled.div`
  width: min(50%, 70.5rem);
  margin-inline: auto;
  padding-inline: 2em;
  //padding-block: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  min-width: 280px;
  position: relative;
  z-index: 99;
`;

export const WorkTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
  text-decoration: none;
  font-style: normal;

  @media screen and (max-width: 40.5rem) {
    font-size: 24px;
  }
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2em;
  padding: 1em;

  @media screen and (max-width: 40.5rem) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
`;

export const WorkWrapper = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-radius: 12px;
  padding-bottom: 1em;
  //padding: 1em;
  align-items: center;
  background-color: var(--neutral-300);
  cursor: pointer;
`;

export const WorkImgWrap = styled.div`
  width: 100%;
  position: relative;

  &::before {
    content: "";
    z-index: -1;
    overflow: hidden;
    transform: rotate(-135deg);
    display: block;
    background: ${({ badgeColor }) => badgeColor || "green"};
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 34px;
    right: -16px;
    clip-path: polygon(
      120px 20px,
      90px -10px,
      30px -10px,
      0px 20px,
      10px 30px,
      110px 30px
    );
    height: 20px;
    width: 120px;
  }

  &::after {
    content: attr(data-after-content);
    z-index: 1;
    overflow: hidden;
    font-size: 10px;
    //font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    line-height: 20px;
    transform: rotate(45deg);
    width: 120px;
    display: block;
    background: ${({ badgeColor }) => badgeColor || "green"};
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 20px;
    right: -30px;
    clip-path: polygon(
      120px 20px,
      90px -10px,
      30px -10px,
      0px 20px,
      10px 30px,
      110px 30px
    );
  }
`;

export const WorkImg = styled.img`
  width: 100%;
  height: 150px;
  display: block;
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
  max-width: 500px;
  position: relative;
`;

export const WorkInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;

export const WorkInfoTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;

  @media screen and (max-width: 40.5rem) {
    font-size: 12px;
  }
`;

export const WorkInfoParagraph = styled.p`
  font-size: 12px;
  font-weight: 100;
  text-align: center;

  @media screen and (max-width: 40.5rem){
    font-size: 9px;
  }
`;

export const WorkAddWrapper = styled(LinkR)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--neutral-300);
  border-radius: 12px;
  padding-block: 12px;
  cursor: pointer;
  text-decoration: none;
`;

export const WorkAdd = styled(FaPlus)`
  font-size: 24px;
  text-align: center;
  color: #fff;
  @media screen and (max-width: 40.5rem) {
    font-size: 16px;
  }
`;
