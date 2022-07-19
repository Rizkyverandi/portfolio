import React from "react";
import { Footer, FooterContainer, Copyright } from "./FooterElements";

const FooterSection = () => {
  return (
    <Footer>
      <FooterContainer>
        <Copyright>
          © {new Date().getFullYear()} Rizky Verandi. All Rights Reserved.
        </Copyright>
      </FooterContainer>
    </Footer>
  );
};

export default FooterSection;
