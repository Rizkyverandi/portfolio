import styled from "@emotion/styled";
import { TextField, RadioGroup } from "@mui/material";

export const Admin = styled.section`
  width: 100%;
  padding: 2em;
`;

export const AdminRadioGroup = styled(RadioGroup)`
  display: flex;
  color: var(--neutral-300);
  justify-content: space-around;

  @media screen and (max-width: 40.5rem) {
    justify-content: left;
    padding-inline: 12px;
  }
`;

export const AdminContainer = styled.div`
  padding: 2em;
  width: min(50%, 70.5rem);
  margin-inline: auto;
  background-color: white;
  border-radius: 12px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  z-index: 99;
  position: relative;
`;

export const CustomTextField = styled(TextField)`
  width: 100%;
`;
