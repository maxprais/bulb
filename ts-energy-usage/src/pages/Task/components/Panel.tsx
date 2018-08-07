import * as React from "react";
import styled from "styled-components";

export const StyledPanelContainer = styled.div`
  padding: 1rem;
`;

export const StyledPanel = styled.main`
  padding: 1rem;
  max-width: 860px;

  border: 2px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 8px;

  margin: auto;
`;

export const Panel: React.SFC = props => (
  <StyledPanelContainer>
    <StyledPanel>{props.children}</StyledPanel>
  </StyledPanelContainer>
);
