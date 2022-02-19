import React, { useState } from "react";

import { Tooltip, Rate } from "antd";
import * as S from "./styles";

const RateButton = ({ setRate, rate }) => {
  const [hoverRate, setHoverRate] = useState();
  return (
    <Tooltip title={hoverRate}>
      <S.Container>
        <Rate
          value={rate ?? 0}
          onChange={setRate}
          onHoverChange={setHoverRate}
        />
      </S.Container>
    </Tooltip>
  );
};

export default RateButton;
