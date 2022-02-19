import React, { useState } from "react";

import { Tooltip, Rate } from "antd";
import * as S from "./styles";

const RateButton = ({ setRate, rate, disabled }) => {
  const [hoverRate, setHoverRate] = useState();
  return (
    <Tooltip title={hoverRate}>
      <S.Container disabled={disabled}>
        <Rate
          value={rate ?? 0}
          onChange={setRate}
          disabled={disabled}
          onHoverChange={setHoverRate}
        />
      </S.Container>
    </Tooltip>
  );
};

export default RateButton;
