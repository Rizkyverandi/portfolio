import React from "react";
import {
  AboutSection,
  BioSection,
  ContactSection,
  HobbiesSection,
} from "../../components";
import { TransitionLayout } from "../../utils";
import { changeTitle } from "../../utils";

// const variants = {
//   hidden: { opacity: 0, x: 0, y: 20 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: 0, y: 20 },
// };

const Home = () => {
  changeTitle("Home - Rizky Verandi")
  return (
    <>
      <TransitionLayout>
          <AboutSection />
          <BioSection />
          <HobbiesSection />
          <ContactSection />        
      </TransitionLayout>
    </>
  );
};

export default Home;
