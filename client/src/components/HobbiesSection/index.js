import React from "react";
import {
  Hobby,
  HobbyContainer,
  HobbyTitle,
  HobbyParagraph,
  MediaPlayer,
} from "./HobbiesElements";

const HobbiesSection = () => {
  return (
    <Hobby>
      <HobbyContainer>
        <HobbyTitle>Hobbies ♥</HobbyTitle>
        <HobbyParagraph>
          Playing Ukulele,
          Technology,
          &nbsp;<a
            href="https://soundcloud.com/skydews"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            Making Music
          </a>
          , Watching Movies.          
        </HobbyParagraph>
        <MediaPlayer
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1098455698&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false"
        />    
      </HobbyContainer>
    </Hobby>
  );
};

export default HobbiesSection;
