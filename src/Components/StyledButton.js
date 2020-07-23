import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
  /* 색상 */
  ${({ theme, color }) => {
    //props를 비구조화
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const Button = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  line-height: 2.25rem;
  font-size: 1rem;

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
  /* 버튼 컬러 */
  ${colorStyles}
`;

function StyledButton({ children, color, ...rest }) {
  return (
    <Button color={color} {...rest}>
      {children}
    </Button>
  );
}

StyledButton.defaultProps = {
  color: "blue",
};

export default StyledButton;
