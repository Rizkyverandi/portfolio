import styled from "@emotion/styled";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const About = styled.section`
  position: relative;
  padding-block: 2em;
  width: 100%;
`;

export const AboutContainer = styled.div`
  width: min(50%, 70.5rem);
  margin-inline: auto;
  min-width: 280px;
  background-color: var(--neutral-300);
  padding-inline: 2em;
  padding-block: 2rem 3rem;
  border-radius: 32px;
  z-index: 99;
  position: relative;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const AboutCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5em;
`;

export const AboutWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5em;
  flex-direction: column;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  padding-block: 1em;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 0.5em;
  }
`;

export const ProfilePicture = styled.img`
  display: block;
  clip-path: circle(50% at 50% 50%);
  width: 150px;
  height: 120px;
  object-fit: cover;
  object-position: 0% 0%;

  @media screen and (max-width: 800px) {
    width: 80px;
    height: 80px;
  }
`;

export const AboutTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
  white-space: nowrap;
  text-transform: uppercase;

  @media screen and (max-width: 40.5rem) {
    font-size: 24px;
  }
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
  font-size: 20px;
`;

export const Specialization = styled.h3`
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: 40.5rem) {
    font-size: 10px;
  }
`;

export const AboutParagraph = styled.p`
  font-size: 14px;
  text-align: justify;

  @media screen and (max-width: 40.5rem) {
    font-size: 9px;
  }
`;

export const SocialMediaWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1em;
  justify-content: space-evenly;
  align-items: center;
  //background-color: red;
  padding-top: 1em;
`;

export const SocialMediaItems = styled.a`
  padding: 0.4em;
  font-size: 24px;
  border-radius: 8px;
  background-color: var(--neutral-300);
  color: var(--primary-clr);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.4);
    transition: 0.1s ease-in;
    color: var(--neutral-100);
    cursor: pointer;
  }

  @media screen and (max-width: 40.5rem) {
    font-size: 18px;
  }
`;
