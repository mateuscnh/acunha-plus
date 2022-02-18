import React, { forwardRef } from "react";

import * as Styled from "./styles.js";

const Chevron = ({ direction, color, size = 40 }, ref) => {
  return direction === "left" ? (
    <Styled.ChevronLeft ref={ref} style={{ fontSize: size }} />
  ) : (
    <Styled.ChevronRight ref={ref} style={{ fontSize: size }} />
  );
};

export default forwardRef(Chevron);
