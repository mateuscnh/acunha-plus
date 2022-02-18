import React, { useState } from "react";

// import { Rate } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import * as S from "./styles";

const LikeButton = ({ labelName, onChange, ...props }) => {
  const [like, setLike] = useState();

  return (
    <S.Container>
      <S.Content>
        <S.Button
          like={like}
          icon={<LikeOutlined />}
          onClick={() => setLike(true)}
        />
        <span />
        <S.Button
          like={like === false}
          icon={<DislikeOutlined />}
          onClick={() => setLike(false)}
        />
      </S.Content>
      {/* <Rate onHoverChange={(value) => console.log(value)} /> */}
    </S.Container>
  );
};

export default LikeButton;
