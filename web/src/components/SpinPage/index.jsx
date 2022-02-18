import React from "react";

import * as Styled from "./styles";
import { Spin as AntSpin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const SpinPage = ({ ...props }) => (
  <Styled.Container {...props}>
    <AntSpin size="large" indicator={<LoadingOutlined />} />
  </Styled.Container>
);

export default SpinPage;
