import React from "react";

import { Tooltip } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import * as S from "./styles";

const LikeButton = ({ handleLike, liked, ...props }) => (
  <S.Container {...props}>
    <S.Content>
      <Tooltip title="Curti">
        <S.Button
          like={liked}
          icon={<LikeOutlined />}
          onClick={() => handleLike(true)}
        />
      </Tooltip>
      <span />
      <Tooltip title="Não curti">
        <S.Button
          like={liked === false}
          icon={<DislikeOutlined />}
          onClick={() => handleLike(false)}
        />
      </Tooltip>
    </S.Content>
  </S.Container>
);

export default LikeButton;
