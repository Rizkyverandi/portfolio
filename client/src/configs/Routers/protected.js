import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../utils/Auth/useAuth";

const Protected = ({ children, allowedRoles }) => {
  const { auth } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authorize`, { withCredentials: true })
      .then((res) => {
        if (res.data.logged) {
          setLoggedIn(res.data.logged);
        } else return history("/");
      })
      .catch((err) => {
        if (err) console.log("check err log..!");
      });
  }, [loggedIn]);

  return (
    <>
      {loggedIn && auth?.roles?.find((role) => allowedRoles.includes(role))
        ? children
        : null}
    </>
  );
};
export default Protected;
