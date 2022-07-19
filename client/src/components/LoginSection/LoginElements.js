import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const Login = styled.section`
  width: 100%;
  padding-block: 2em;
  position: relative;  
`;

export const LoginContainer = styled.div`
  position: relative;
  width: min(50%, 70.5rem);
  margin-inline: auto;
  background: var(--neutral-300);
  min-width: 280px;
  padding-inline: 2em;
  padding-block: 2rem 2rem;
  border-radius: 32px;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  flex-direction: column;
`;

export const LoginTitle = styled.h1`
  text-decoration: none;
  font-size: 16px;
  font-weight: 100;
  text-align: center;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
`;

export const LoginInput = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& label": {
    color: "#00ADB5",
  },
  "&:hover label": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#00ADB5",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& fieldset": {
    width: "100%",    
  }
});
