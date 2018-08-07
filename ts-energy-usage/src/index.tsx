import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import { global } from "bulb-design-test/utils/globalStyles";

// with default responsive behaviour
// tslint:disable-next-line:no-unused-expression
injectGlobal`
  ${global()}
`;

import { App } from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
