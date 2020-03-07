import styled from "styled-components";

export const Sticker = styled.div`
  background-color: ${props => props.backgroundColor};
  min-height: 100px;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
