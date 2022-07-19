import styled from "@emotion/styled";

export const Stack = styled.section`
  width: 100%;
  padding-block: 2em;
`;

export const StackContainer = styled.div`
  width: min(50%, 70.5rem);
  margin-inline: auto;
  min-width: 280px;
  padding-inline: 2em;  
  display: flex;
  flex-direction: column;
  gap: 1em;
  z-index: 99;
  position: relative;
`;

export const StackWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const StackTitle = styled.h1`
  font-size: ${({ big }) => (big ? "32px" : "24px")};
  font-weight: 500;

  
  @media screen and (max-width: 40.5rem) {
    font-size: ${({ big }) => (big ? "24px" : "16px")};;    
  }
`;

export const StackInfo = styled.p`
  font-size: 18px;
  text-decoration: none;
  font-style: none;
  
  @media screen and (max-width: 40.5rem) {
    font-size: 11px;    
  }
`;

export const StackListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  flex-wrap: wrap;
`;

export const StackList = styled.p`
  font-size: 12px;
  border-radius: 9px;
  padding: 8px;
  background-color: var(--secondary-clr);
  font-weight: 500;

  @media screen and (max-width: 40.5rem) {
    font-size: 9px;
  }
`;
