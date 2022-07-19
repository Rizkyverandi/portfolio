import React from "react";
import {
  About,
  AboutContainer,
  Specialization,
  AboutCard,
  AboutWrapper,
  ProfileWrapper,
  ProfilePicture,
  AboutTitle,
  SocialMediaWrapper,
  SocialMediaItems,
  // InfoIcon,
  AboutParagraph,
} from "./AboutElements";
import { MyPicture } from "../../assets";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <About>
      <AboutContainer>
        <AboutCard>
          <ProfileWrapper>
            <AboutWrapper>
              <AboutTitle>Rizky Verandi</AboutTitle>
              <Specialization> (Developer / Music Producer)</Specialization>
            </AboutWrapper>
            <ProfilePicture src={MyPicture} />
          </ProfileWrapper>
          <AboutParagraph>
            Hello, my name is Rizky Verandi. recently, I just graduated from Bina
            Nusantara University as a Bachelor of degree in computer science.
            During my studies I got a lot of experience from the internship that
            I did as a Fullstack Web Developer in one of the pharmaceutical
            companies in Indonesia. My hobby is making music since high school,
            there are already several works that I made and I uploaded on my
            <a href="https://www.soundcloud.com/skydews/tracks" target="_blank" style={{color: "#00ADB5", textDecoration: "none"}}> SoundCloud</a>
          </AboutParagraph>
          <SocialMediaWrapper>
            <SocialMediaItems
              href="https://www.facebook.com/rizkyverandi/"
              target="_blank"
            >
              <FaFacebook />
            </SocialMediaItems>
            <SocialMediaItems
              href="https://www.twitter.com/skydewsmusic/"
              target="_blank"
            >
              <FaTwitter />
            </SocialMediaItems>
            <SocialMediaItems
              href="https://www.instagram.com/skydewsmusic/"
              target="_blank"
            >
              <FaInstagram />
            </SocialMediaItems>
            <SocialMediaItems
              href="https://www.linkedin.com/in/rizkyverandi/"
              target="_blank"
            >
              <FaLinkedin />
            </SocialMediaItems>
            <SocialMediaItems
              href="https://www.github.com/Rizkyverandi/"
              target="_blank"
            >
              <FaGithub />
            </SocialMediaItems>
          </SocialMediaWrapper>
        </AboutCard>
      </AboutContainer>
    </About>
  );
};

export default AboutSection;
