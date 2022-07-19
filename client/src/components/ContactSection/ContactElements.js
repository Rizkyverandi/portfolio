import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const Contact = styled.section`
  width: 100%;
  padding-top: 3em;
`;

export const ContactContainer = styled.div`
  width: min(50%, 70.5rem);
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin-inline: auto;
  min-width: 280px;
  padding-inline: 2em;
  position: relative;    
  z-index: 99;
`;

export const ContactTitle = styled.h1`
  font-size: 32px;
  text-decoration: none;
  font-weight: 500;

  @media screen and (max-width: 40.5rem) {
    font-size: 24px;
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  background-color: var(--neutral-100);
  padding-top: 1em;
  padding-bottom: 2em;
  border-radius: 12px;
  padding-inline: 1em;
  display: grid;
  grid-template-columns: repeat(2, minmax(5rem, 1fr));
  grid-template-areas: "col1 col1" "col2 col2" "col3 col3";
  grid-gap: 0.4em;  
  @media screen and (max-width: 40.5rem) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-template-areas: "col1" "col1" "col2" "col3";
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: .5em;
`;

export const TextareaWrapper = styled.div`
  width: 100%;
  grid-area: col2;
  margin-bottom: .5em;
`;

export const ContactInput = styled(TextField)`
  width: 100%;
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: var(--primary-clr);
    }
  }

  & .MuiOutlinedInput-root fieldset {
    &:hover {
      border-color: red;
    }
  }
  input::placeholder {
    font-size: 12px;
  }
`;

export const ButtonWrapper = styled.div`
  grid-column: span 2;
  grid-area: col3;
  width: 100%;
  text-align: right;    
`;
