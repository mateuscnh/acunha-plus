import React, { useEffect, useState } from "react";

import { Rate } from "antd";
import * as S from "./styles";

const RateButton = ({ handleRate, rate, disabled, ...props }) => {
  const [temporaryRate, setTemporaryRate] = useState();

  useEffect(() => {
    if (rate) {
      setTemporaryRate(rate);
    }
  }, [rate]);

  return (
    <S.Container disabled={disabled} {...props}>
      <Rate
        value={temporaryRate ?? 0}
        onChange={(value) => {
          handleRate(value);
          setTemporaryRate(value);
        }}
        disabled={disabled}
      />
    </S.Container>
  );
};

export default RateButton;
