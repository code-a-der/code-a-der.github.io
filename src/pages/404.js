import React from "react";
import styled from "styled-components";

export default () => (
  <Div>
    <h1>404 Not Found</h1>
    <p>您要访问的页面不存在，请确认后再访问</p>
  </Div>
);

const Div = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
