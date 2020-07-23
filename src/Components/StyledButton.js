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

const sizeStyles = css`
  ${(props) =>
    props.size === "large" &&
    css`
      height: 3rem;
      line-height: 3rem;
      font-size: 1.25rem;
    `};

  ${(props) =>
    props.size === "medium" &&
    css`
      height: 2.25rem;
      line-height: 2.25rem;
      font-size: 1rem;
    `};

  ${(props) =>
    props.size === "small" &&
    css`
      height: 1.75rem;
      line-height: 1.75rem;
      font-size: 0.875rem;
    `};
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

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
  ${colorStyles}
  ${sizeStyles}
`;

function StyledButton({ children, color, size, ...rest }) {
  return (
    <Button color={color} size={size} {...rest}>
      {children}
    </Button>
  );
}

StyledButton.defaultProps = {
  color: "blue",
  size: "medium",
};

export default StyledButton;
