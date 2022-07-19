import React from "react";
import {
  Work,
  WorkContainer,
  WorkTitle,
  Grid,
  WorkWrapper,
  WorkImg,
  WorkImgWrap,
  WorkInfoWrapper,
  WorkInfoTitle,
  WorkInfoParagraph,
  WorkAddWrapper,
  WorkAdd,
} from "./WorkElements";
import { changeTitle } from "../../utils/DynamicTitle";
import useAuth from "../../utils/Auth/useAuth";
import _ from "lodash";

const WorkSection = () => {
  const [works, setWorks] = React.useState([]);

  React.useEffect( () => {
    const fetchFunc = async () => {
      await fetch("http://localhost:8000/api/work", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setWorks(data));
    }  
    fetchFunc();   
  }, []);

  const { auth } = useAuth();

  const badgeColor = (progress) => {
    if (progress === "pending") return "red";
    else if (progress === "ongoing") return "blue";
  };

  const WorkContent = () => {
    return (
      <>
        {works.length !== 0 ? (
          works.map((work, index) => (
            <WorkWrapper
              key={index}
              id={work._id}
              href={work.link}
              target="_blank"
            >
              <WorkImgWrap
                data-after-content={work.progress}
                badgeColor={badgeColor(work.progress)}
              >
                {/* <WorkImg src={work.img} /> */}
                <WorkImg
                  src={`http:\\\\localhost:8000\\${work.img.substr(
                    work.img.indexOf("uploads"),
                    work.img.length
                  )}`}
                />
              </WorkImgWrap>
              <WorkInfoWrapper>
                <WorkInfoTitle>{work.title}</WorkInfoTitle>
                <WorkInfoParagraph>{work.desc}</WorkInfoParagraph>
              </WorkInfoWrapper>
            </WorkWrapper>
          ))
        ) : (
          <h2 style={{ fontWeight: 100, textAlign: "center" }}>
            Recently is empty.
          </h2>
        )}
      </>
    );
  };

  changeTitle("Works - Rizky Verandi");

  return (
    <Work>
      <WorkContainer>
        <WorkTitle>Works</WorkTitle>
        <Grid>
          <WorkContent />
        </Grid>
        {!_.isEmpty(auth) && (
          <Grid>
            <WorkAddWrapper to="/work/addwork">
              <WorkAdd />
            </WorkAddWrapper>
          </Grid>
        )}
      </WorkContainer>
    </Work>
  );
};

export default WorkSection;
