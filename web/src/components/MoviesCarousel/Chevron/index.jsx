import React, { forwardRef } from "react";

import * as S from "./styles.js";

const Chevron = ({ direction, color, size = 40 }, ref) => {
  return direction === "left" ? (
    <S.ChevronLeft ref={ref} style={{ fontSize: size }} />
  ) : (
    <S.ChevronRight ref={ref} style={{ fontSize: size }} />
  );
};

export default forwardRef(Chevron);
