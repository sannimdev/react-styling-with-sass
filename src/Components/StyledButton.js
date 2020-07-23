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
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: "3rem",
    lineHeight: "3rem",
    fontSize: "1.25rem",
  },
  medium: {
    height: "2.25rem",
    lineHeight: "2.25rem",
    fontSize: "1rem",
  },
  small: {
    height: "1.75rem",
    lineHeight: "1.75rem",
    fontSize: "0.875rem",
  },
};

const sizeStyles = css`
  /*  크기 */
  ${({ size }) => css`
    /*{size} => props.size 를 비구조화 할당*/
    height: ${sizes[size].height};
    line-height: ${sizes[size].lineHeight};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
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
  ${fullWidthStyle}
`;

function StyledButton({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <Button color={color} size={size} outline={outline} fullWidth={fullWidth} {...rest}>
      {children}
    </Button>
  );
}

StyledButton.defaultProps = {
  color: "blue",
  size: "medium",
};

export default StyledButton;
