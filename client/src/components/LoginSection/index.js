import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import {
  Login,
  LoginContainer,
  LoginTitle,
  LoginWrapper,
  LoginInput,
} from "./LoginElements";
import axios from "axios";
import useAuth from "../../utils/Auth/useAuth";
import { Link } from "react-router-dom";

const LoginSection = () => {
  const { setAuth } = useAuth();
  const [phrase, setPhrase] = useState(null);
  const [success, setSuccess] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authorize", { withCredentials: true })
      .then((response) => {
        if (response.data?.logged)
          return setSuccess({
            ...response.data.user,
            loggedIn: response.data.logged,
          });
      })
      .catch((error) => {
        let res = error.response;
        if (res.status === 401) return toast.error(res.data.message);
        else if (res.status === 500) return toast.error(res.data.message);
      });
  }, []);

  const sumbitHandler = (event) => {
    event.preventDefault();
    if (!phrase) {
      return toast.error("Please enter your secret key");
    }

    let data = {
      password: phrase,
    };

    axios
      .post("http://localhost:8000/api/admin", data, { withCredentials: true })
      .then((response) => {
        toast.success(response.data.message);
        setAuth(response.data);
        setSuccess({ name: response.data.name, loggedIn: true });
        setPhrase(null);
      })
      .catch((error) => {
        let res = error.response;
        if (res.status === 401) return toast.error(res.data.message);
        else if (res.status === 500) return toast.error(res.data.message);
      });
  };

  return (
    <Login>
      <Toaster position="bottom-center" reverseOrder={false} />
      <LoginContainer>
        {success?.loggedIn ? (
          <>
            <p
              style={{ fontSize: "13px" }}
            >{`Hello ${success?.name}, Welcome back!`}</p>
            <Link to="/work/addwork">Test</Link>
          </>
        ) : (
          <>
            <LoginTitle>Enter your key-phrase to authorize you</LoginTitle>
            <LoginWrapper>
              <LoginInput
                id="key-phrase"
                label="key-phrase"
                variant="outlined"
                type="password"
                onChange={(event) => setPhrase(event.target.value)}
              />
            </LoginWrapper>
            <Button
              variant="contained"
              sx={{ fontSize: "12px" }}
              onClick={sumbitHandler}
            >
              Submit
            </Button>
          </>
        )}
      </LoginContainer>
    </Login>
  );
};

export default LoginSection;
