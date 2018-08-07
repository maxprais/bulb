import * as React from "react";

import styled, { keyframes } from "styled-components";
import { palette } from "bulb-design-test/styles/ts-palette";

// styles from legacy header
const StyledHeader = styled("header")`
  height: 5rem;
  padding: 1.5rem;
  background: ${palette.brand.pink};
`;

const dash = keyframes`
  from { stroke-dashoffset: 900; }
  to { stroke-dashoffset: 200; }
`;

export const BulbLogo = styled.svg`
  height: 2rem;
  width: 100px;

  path {
    fill: none;
    stroke: ${palette.greyScale.white};
    stroke-width: 6;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 800;
    stroke-dashoffset: 200;
    animation-delay: 1s;
    animation: ${dash} 2s ease-out both;
  }
`;

export const Header: React.SFC = () => {
  return (
    <StyledHeader>
      <a href="https://bulb.co.uk">
        <BulbLogo
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="20 76.2 141.7 53.8"
          focusable="false"
        >
          <title>Bulb Homepage</title>
          <path d="M22.9,102.3C34,91.4,39.2,82,37.7,79.2c0,0-7.6,6.4-11.1,20.3c-3.6,14.6-1.4,25.5,8.3,27.3c7.5,1.4,15-5.3,16.6-14.3c1.9-9.8-3.6-15.1-10.8-13.8c-7.4,1.3-10.1,10-10.1,10s10.5-11.2,23.8-11.2c10.7,0,11.4,2,11.4,2c-4.3,11.2-7.6,22.8-1,26.5c7.5,4.2,16.5-7.2,19.3-12.8s5.3-15.1,3.5-13.5s-4,9.2-4.2,13.1c-0.2,4-0.6,12.2,7,13.2c8.3,1.1,18.8-15.2,23.5-26.3c4.5-10.9,5.4-20.4,2.7-20.4s-8.5,8.2-11.7,20.1c-6.1,23.3,4.5,30.2,11.6,26.7c6.9-3.7,19.8-15.4,23.8-27.4c3.4-10.3,5-19.4,2.2-19.4c-3.4,0-8.9,10.1-11.7,20.4s-1.1,26.2,11.2,27.2c7,0.6,13.6-5.7,15.7-12.5c2.6-8.3-0.3-14.9-7.6-14.9c-6.8,0-9.9,7.3-9.9,7.3" />
        </BulbLogo>
      </a>
    </StyledHeader>
  );
};
