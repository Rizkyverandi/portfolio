import React from "react";
import { StackSection } from "../../components";
import { changeTitle, TransitionLayout } from "../../utils";

const languages = ["C", "C#", "Javascript", "CSS", "HTML"];
const fe = ["React", "Bootstrap", "Node.js", "Material UI", "JQuery"];
const be = [".NET", "MySQL", "Node.js", "Oracle", "MongoDB"];
const interest = [
  "Vite.js",
  "Vue.js",
  "Jenkins",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "ReactNative",
];

const Stack = () => {
  changeTitle("Stack - Rizky Verandi");
  return (
    <TransitionLayout>
      <StackSection languages={languages} fe={fe} be={be} interest={interest}/>
    </TransitionLayout>
  );
};

export default Stack;
