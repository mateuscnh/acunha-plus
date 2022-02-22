import React, { useState } from "react";

import { Tooltip } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import * as S from "./styles";

const LikeButton = ({ onChange, ...props }) => {
  const [like, setLike] = useState();

  return (
    <S.Container>
      <Tooltip title="Curti">
        <S.Button
          like={like}
          icon={<LikeOutlined />}
          onClick={() => setLike(true)}
        />
      </Tooltip>
      <span />
      <Tooltip title="Não curti">
        <S.Button
          like={like === false}
          icon={<DislikeOutlined />}
          onClick={() => setLike(false)}
        />
      </Tooltip>
    </S.Container>
  );
};

export default LikeButton;
