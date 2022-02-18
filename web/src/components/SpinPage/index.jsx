import React from "react";

import * as S from "./styles";
import { Spin as AntSpin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const SpinPage = ({ ...props }) => (
  <S.Container {...props}>
    <AntSpin size="large" indicator={<LoadingOutlined />} />
  </S.Container>
);

export default SpinPage;
