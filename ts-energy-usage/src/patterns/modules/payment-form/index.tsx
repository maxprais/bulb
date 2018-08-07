import * as React from "react";
import styled from "styled-components";

import { palette } from "bulb-design-test/styles/ts-palette";
import { TextInput } from "bulb-design-test/modules/TextInput";
import { Vspace } from "bulb-design-test/modules/Vspace";

export const PaymentPanel = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 2rem;
  max-width: 584px;
  background: ${palette.greyScale.lightGrey};
`;

export const PaymentForm = () => (
  <PaymentPanel>
    <Vspace spacing="saturn">
      <TextInput id="account-holder" label="Account holder" status="unknown" />
      <TextInput id="account-number" label="Account number" status="unknown" />
      <TextInput id="sort-code" label="Sort code" status="unknown" />
    </Vspace>
  </PaymentPanel>
);
