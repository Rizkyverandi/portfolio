import React from "react";
import {
  NotFound,
  NotFoundContainer,
  NotFoundImg,
  BackButton,
} from "./NotFoundElements";
import TransitionLayout from "../TransitionLayout";
import { Img404 } from "../../assets";
import {changeTitle} from "../DynamicTitle"

const NotFoundSection = () => {
  changeTitle("Page not found!");  
  return (
    <TransitionLayout>
      <NotFound>
        <NotFoundContainer>
          <NotFoundImg src={Img404} />
          <BackButton to="/">Back to Home</BackButton>
        </NotFoundContainer>
      </NotFound>
    </TransitionLayout>
  );
};

export default NotFoundSection;
