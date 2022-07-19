import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Admin,
  AdminContainer,
  CustomTextField,
  AdminRadioGroup,
} from "./AdminElements";
import Dropzone from "react-dropzone";
import { FaUpload } from "react-icons/fa";
import {
  Button,
  Radio,
  FormControlLabel,
  CircularProgress,
} from "@mui/material";
const _ = require("lodash");
const { SendRequest } = require("../../helpers");


const AdminSection = () => {
  const history = useNavigate();
  const [data, setData] = useState({
    title: "",
    desc: "",
    link: "",
    img: "",
    progress: "",
  });
  
  const [loading, setLoading] = useState(false);

  const changeHandler = (event) => {
    let name = event.target.name;
    if (name === "title") setData({ ...data, title: event.target.value });
    else if (name === "desc") setData({ ...data, desc: event.target.value });
    else if (name === "link") setData({ ...data, link: event.target.value });
    else setData({ ...data, progress: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    var isValid = false;

    // Validate data before submit
    for (let x in data) {
      if (data[x] === "" || data[x] === null) {
        return (isValid = false);
      }
      isValid = true;
    }

    if (isValid) {
      setLoading(true);
      let formData = new FormData();
      formData.append("title", data.title);
      formData.append("desc", data.desc);
      formData.append("link", data.link);
      formData.append("work-img", data.img);
      formData.append("progress", data.progress);

      SendRequest.post("work/addwork", formData, {
        withCredentials: true,
      })
        .then((response) => {
          if (response.status !== 201) {
            throw new Error("HTTP status " + response.statusText);
          }
          alert(response.data.message);
          setData({
            title: "",
            desc: "",
            link: "",
            img: "",
            progress: "",
          });
          setLoading(false);
        })
        .catch((error) => {         
          alert("Error occured! Please refresh the page and try again.");
          console.log(error);
          history("/")
        });
    }
  };

  const fileChanges = (event) => {
    let file = event[0];
    setData({ ...data, img: file });
  };

  return (
    <Admin>
      <AdminContainer>
        <form
          onSubmit={submitHandler}
          style={{ display: "flex", gap: "1em", flexDirection: "column" }}
        >
          <CustomTextField
            name="title"
            label="Title"
            onChange={changeHandler}
            value={data.title}
          />
          <CustomTextField
            name="desc"
            label="Description"
            multiline
            maxRows={3}
            onChange={changeHandler}
            value={data.desc}
          />
          <CustomTextField
            name="link"
            label="Project Link"
            onChange={changeHandler}
            value={data.link}
          />
          <AdminRadioGroup
            row
            aria-labelledby="work-progress"
            name="progress"
            onChange={changeHandler}
            value={data.progress}
          >
            <FormControlLabel
              value="ongoing"
              control={<Radio size="small" />}
              label="Ongoing"
            />
            <FormControlLabel
              value="pending"
              control={
                <Radio
                  size="small"
                  sx={{
                    "&.Mui-checked": {
                      color: "red",
                    },
                  }}
                />
              }
              label="Pending"
            />
            <FormControlLabel
              value="complete"
              control={<Radio color="success" size="small" />}
              label="Complete"
            />
          </AdminRadioGroup>
          <Dropzone onDrop={fileChanges}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  style={{
                    //background: "#393E46",
                    paddingBlock: "24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    gap: ".5em",
                    border: "3px dashed #000",
                  }}
                  {...getRootProps()}
                >
                  <input {...getInputProps()} name="file" />
                  <p
                    style={{
                      color: "#000",
                      fontSize: 12,
                      fontWeight: "100",
                      minWidth: "150px",
                      textAlign: "center",
                    }}
                  >
                    Drag 'n' drop some files here, or click to select files
                  </p>
                  <FaUpload
                    style={{ color: "#000", fontSize: 24, fontWeight: "100" }}
                  />
                </div>
              </section>
            )}
          </Dropzone>
          <div style={{ display: "flex", justifyContent: "right" }}>
            <Button
              variant="contained"
              color="success"
              id="btn-submit"
              style={{ width: "100px" }}
              type="submit"
              disabled={loading}
            >
              {loading && <CircularProgress size={20} />}
              {!loading && "Submit"}
            </Button>
          </div>
        </form>
      </AdminContainer>
    </Admin>
  );
};

export default AdminSection;
