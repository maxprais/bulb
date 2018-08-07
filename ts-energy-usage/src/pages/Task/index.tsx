import * as React from "react";

import { StepsToComplete, Heading } from "bulb-design-test";
import { Publication } from "bulb-design-test/modules/Publication";
import { StyledCtaButton } from "bulb-design-test/modules/ButtonsAndLinks/StyledCtaButton";
import { Vspace } from "bulb-design-test/modules/Vspace";

import { Header } from "../../patterns/modules/header";

import { Panel } from "./components/Panel";
import { PaymentForm } from "../../patterns/modules/payment-form";
import styled from "styled-components";

const StyledDescription = styled.p`
  max-width: 551px;
`;

export const Task: React.SFC = () => (
  <>
    <Header />

    <Publication>
      <StepsToComplete label="Your progress" current={2}>
        <StepsToComplete.Step label="Quote" />
        <StepsToComplete.Step label="Information" />
        <StepsToComplete.Step label="Payment" />
      </StepsToComplete>
      <Panel>
        <Vspace spacing="saturn">
          <Heading level="h1" size="hippo">
            Payment details
          </Heading>
          <PaymentForm />
          <StyledDescription>
            We'll take your first payment on the <strong>30th of May</strong>.
            You’ll be able to change the payment date later.
          </StyledDescription>
          <StyledCtaButton purpose="primary">
            Complete my switch
          </StyledCtaButton>
          <div />
        </Vspace>
      </Panel>
    </Publication>
  </>
);
