import styled from "@emotion/styled";

export const Hobby = styled.section`
  width: 100%;
  background-color: var(--primary-clr);
  padding-bottom: 5em;
  background-image: url("data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgOTYwIDMwMCIgd2lkdGg9Ijk2MCIgaGVpZ2h0PSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+PHBhdGggZD0iTTAgMTgyTDIyLjggMTgxLjNDNDUuNyAxODAuNyA5MS4zIDE3OS4zIDEzNyAxNzUuM0MxODIuNyAxNzEuMyAyMjguMyAxNjQuNyAyNzQgMTYwLjdDMzE5LjcgMTU2LjcgMzY1LjMgMTU1LjMgNDExLjIgMTU1QzQ1NyAxNTQuNyA1MDMgMTU1LjMgNTQ4LjggMTYzLjJDNTk0LjcgMTcxIDY0MC4zIDE4NiA2ODYgMTkxLjNDNzMxLjcgMTk2LjcgNzc3LjMgMTkyLjMgODIzIDE4OC4zQzg2OC43IDE4NC4zIDkxNC4zIDE4MC43IDkzNy4yIDE3OC44TDk2MCAxNzdMOTYwIDMwMUw5MzcuMiAzMDFDOTE0LjMgMzAxIDg2OC43IDMwMSA4MjMgMzAxQzc3Ny4zIDMwMSA3MzEuNyAzMDEgNjg2IDMwMUM2NDAuMyAzMDEgNTk0LjcgMzAxIDU0OC44IDMwMUM1MDMgMzAxIDQ1NyAzMDEgNDExLjIgMzAxQzM2NS4zIDMwMSAzMTkuNyAzMDEgMjc0IDMwMUMyMjguMyAzMDEgMTgyLjcgMzAxIDEzNyAzMDFDOTEuMyAzMDEgNDUuNyAzMDEgMjIuOCAzMDFMMCAzMDFaIiBmaWxsPSIjMDBhZGI1Ij48L3BhdGg+PHBhdGggZD0iTTAgMTg0TDIyLjggMTg4LjVDNDUuNyAxOTMgOTEuMyAyMDIgMTM3IDIwOUMxODIuNyAyMTYgMjI4LjMgMjIxIDI3NCAyMjBDMzE5LjcgMjE5IDM2NS4zIDIxMiA0MTEuMiAyMDMuOEM0NTcgMTk1LjcgNTAzIDE4Ni4zIDU0OC44IDE4My4zQzU5NC43IDE4MC4zIDY0MC4zIDE4My43IDY4NiAxODQuMkM3MzEuNyAxODQuNyA3NzcuMyAxODIuMyA4MjMgMTgzLjNDODY4LjcgMTg0LjMgOTE0LjMgMTg4LjcgOTM3LjIgMTkwLjhMOTYwIDE5M0w5NjAgMzAxTDkzNy4yIDMwMUM5MTQuMyAzMDEgODY4LjcgMzAxIDgyMyAzMDFDNzc3LjMgMzAxIDczMS43IDMwMSA2ODYgMzAxQzY0MC4zIDMwMSA1OTQuNyAzMDEgNTQ4LjggMzAxQzUwMyAzMDEgNDU3IDMwMSA0MTEuMiAzMDFDMzY1LjMgMzAxIDMxOS43IDMwMSAyNzQgMzAxQzIyOC4zIDMwMSAxODIuNyAzMDEgMTM3IDMwMUM5MS4zIDMwMSA0NS43IDMwMSAyMi44IDMwMUwwIDMwMVoiIGZpbGw9IiMyNzhmYTIiPjwvcGF0aD48cGF0aCBkPSJNMCAyMTFMMjIuOCAyMTFDNDUuNyAyMTEgOTEuMyAyMTEgMTM3IDIxMy43QzE4Mi43IDIxNi4zIDIyOC4zIDIyMS43IDI3NCAyMjQuN0MzMTkuNyAyMjcuNyAzNjUuMyAyMjguMyA0MTEuMiAyMzAuMkM0NTcgMjMyIDUwMyAyMzUgNTQ4LjggMjMyLjdDNTk0LjcgMjMwLjMgNjQwLjMgMjIyLjcgNjg2IDIyMC44QzczMS43IDIxOSA3NzcuMyAyMjMgODIzIDIyMy43Qzg2OC43IDIyNC4zIDkxNC4zIDIyMS43IDkzNy4yIDIyMC4zTDk2MCAyMTlMOTYwIDMwMUw5MzcuMiAzMDFDOTE0LjMgMzAxIDg2OC43IDMwMSA4MjMgMzAxQzc3Ny4zIDMwMSA3MzEuNyAzMDEgNjg2IDMwMUM2NDAuMyAzMDEgNTk0LjcgMzAxIDU0OC44IDMwMUM1MDMgMzAxIDQ1NyAzMDEgNDExLjIgMzAxQzM2NS4zIDMwMSAzMTkuNyAzMDEgMjc0IDMwMUMyMjguMyAzMDEgMTgyLjcgMzAxIDEzNyAzMDFDOTEuMyAzMDEgNDUuNyAzMDEgMjIuOCAzMDFMMCAzMDFaIiBmaWxsPSIjM2E3Mjg4Ij48L3BhdGg+PHBhdGggZD0iTTAgMjQ2TDIyLjggMjQ2LjJDNDUuNyAyNDYuMyA5MS4zIDI0Ni43IDEzNyAyNDkuNUMxODIuNyAyNTIuMyAyMjguMyAyNTcuNyAyNzQgMjYwLjJDMzE5LjcgMjYyLjcgMzY1LjMgMjYyLjMgNDExLjIgMjYxLjhDNDU3IDI2MS4zIDUwMyAyNjAuNyA1NDguOCAyNTguMkM1OTQuNyAyNTUuNyA2NDAuMyAyNTEuMyA2ODYgMjQ5LjNDNzMxLjcgMjQ3LjMgNzc3LjMgMjQ3LjcgODIzIDI0NS44Qzg2OC43IDI0NCA5MTQuMyAyNDAgOTM3LjIgMjM4TDk2MCAyMzZMOTYwIDMwMUw5MzcuMiAzMDFDOTE0LjMgMzAxIDg2OC43IDMwMSA4MjMgMzAxQzc3Ny4zIDMwMSA3MzEuNyAzMDEgNjg2IDMwMUM2NDAuMyAzMDEgNTk0LjcgMzAxIDU0OC44IDMwMUM1MDMgMzAxIDQ1NyAzMDEgNDExLjIgMzAxQzM2NS4zIDMwMSAzMTkuNyAzMDEgMjc0IDMwMUMyMjguMyAzMDEgMTgyLjcgMzAxIDEzNyAzMDFDOTEuMyAzMDEgNDUuNyAzMDEgMjIuOCAzMDFMMCAzMDFaIiBmaWxsPSIjM2Y1NzY4Ij48L3BhdGg+PHBhdGggZD0iTTAgMjc3TDIyLjggMjc0LjJDNDUuNyAyNzEuMyA5MS4zIDI2NS43IDEzNyAyNjMuN0MxODIuNyAyNjEuNyAyMjguMyAyNjMuMyAyNzQgMjYyLjdDMzE5LjcgMjYyIDM2NS4zIDI1OSA0MTEuMiAyNjEuMkM0NTcgMjYzLjMgNTAzIDI3MC43IDU0OC44IDI3NC4yQzU5NC43IDI3Ny43IDY0MC4zIDI3Ny4zIDY4NiAyNzYuN0M3MzEuNyAyNzYgNzc3LjMgMjc1IDgyMyAyNzIuM0M4NjguNyAyNjkuNyA5MTQuMyAyNjUuMyA5MzcuMiAyNjMuMkw5NjAgMjYxTDk2MCAzMDFMOTM3LjIgMzAxQzkxNC4zIDMwMSA4NjguNyAzMDEgODIzIDMwMUM3NzcuMyAzMDEgNzMxLjcgMzAxIDY4NiAzMDFDNjQwLjMgMzAxIDU5NC43IDMwMSA1NDguOCAzMDFDNTAzIDMwMSA0NTcgMzAxIDQxMS4yIDMwMUMzNjUuMyAzMDEgMzE5LjcgMzAxIDI3NCAzMDFDMjI4LjMgMzAxIDE4Mi43IDMwMSAxMzcgMzAxQzkxLjMgMzAxIDQ1LjcgMzAxIDIyLjggMzAxTDAgMzAxWiIgZmlsbD0iIzM5M2U0NiI+PC9wYXRoPjwvc3ZnPg==");
  background-repeat: no-repeat;
  aspect-ratio: 960/300;
  background-position: bottom;
  background-size: cover;
  

  @media screen and (max-width: 40.5rem){
    padding-bottom: 4em;
  }
`;

export const HobbyContainer = styled.div`
  width: min(50%, 70.5rem);
  min-width: 280px;
  margin-inline: auto;
  padding-inline: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  position: relative;
  z-index: 99;
`;

export const HobbyTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
  padding-block: 0.5em;

  @media screen and (max-width: 40.5rem) {
    font-size: 24px;
  }
`;

export const HobbyParagraph = styled.p`
  font-size: 16px;

  @media screen and (max-width: 40.5rem) {
    font-size: 9px;
    min-width: 220px;
  }
`;

export const MediaPlayer = styled.iframe`
  width: 100%;
  height: 150px;
  border: 2px solid var(--neutral-300);
  border-radius: 12px;
`;