import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NotFound = styled.section`
  width: 100%;  
  padding: 2em;  
`;

export const NotFoundContainer = styled.div`
  width: min(50%, 70.5rem);
  margin-inline: auto;
  position: relative;
  z-index: 99;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  min-width: 260px;  
`;

export const NotFoundImg = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const BackButton = styled(Link)`
  padding: 12px;
  background-color: var(--secondary-clr);
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  font-style: none;
  color: var(--neutral-100);
  max-width: max-content;
`;
