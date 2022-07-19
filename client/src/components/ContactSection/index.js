import React from "react";
import {
  Contact,
  ContactContainer,
  ContactTitle,
  ContactForm,
  ContactInput,
  InputWrapper,
  TextareaWrapper,
  ButtonWrapper,
} from "./ContactElements";
import { InputLabel, CircularProgress, Button } from "@mui/material";
import { SendRequest } from "../../helpers";

import _ from "lodash";

const ContactSection = () => {
  const [nama, setNama] = React.useState(null);
  const [from, setFrom] = React.useState(null);
  const [desc, setDesc] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const sumbitHandler = async (e) => {
    setLoading(true);
    const data = {
      nama: nama,
      from: from,
      desc: desc,
    };
    let isValid = _.values(data).some((x) => x !== null && x !== "");

    if (!isValid) {
      return alert("Please fill the empty form.");
    }

    await SendRequest.post("home/contactme", data)
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Contact>
      <ContactContainer>
        <ContactTitle>Contact me</ContactTitle>
        <ContactForm>
          <InputWrapper>
            <InputLabel shrink htmlFor="name">
              Name
            </InputLabel>
            <ContactInput
              hiddenLabel
              id="name"
              placeholder="Name"
              variant="outlined"
              size="small"
              onChange={(e) => {
                setNama(e.target.value);
              }}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel shrink htmlFor="email">
              Email
            </InputLabel>
            <ContactInput
              hiddenLabel
              id="email"
              placeholder="Email"
              variant="outlined"
              size="small"
              type="email"
              onChange={(e) => {
                setFrom(e.target.value);
              }}
              required
            />
          </InputWrapper>
          <TextareaWrapper>
            <InputLabel shrink htmlFor="message">
              Message
            </InputLabel>
            <ContactInput
              InputProps={{ style: { fontSize: 12 } }}
              hiddenLabel
              id="message"
              placeholder="Message"
              multiline
              rows={3}
              maxRows={3}
              variant="outlined"
              size="small"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              required
            />
          </TextareaWrapper>
          <ButtonWrapper>
            <Button
              variant="contained"
              size="small"
              sx={{
                fontSize: 12,
                background: "#00ADB5",
                "&:focus": {
                  background: "#393E46",
                },
              }}
              onClick={sumbitHandler}
              disabled={loading}
            >
              {loading && <CircularProgress size={20} />}
              {!loading && "Send"}
            </Button>
          </ButtonWrapper>
        </ContactForm>
      </ContactContainer>
    </Contact>
  );
};

export default ContactSection;
