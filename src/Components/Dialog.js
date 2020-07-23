import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import StyledButton from "./StyledButton";

const fadeIn = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

const fadeOut = keyframes`
    from{
        opacity:1;
    }
    to{
        opacity:0.3; /* 상태 변화를 보기 위해 부자연스럽게 설정하였음 */
    }
`;

const slideUp = keyframes`
    from{
        transform:translateY(200px);
    }
    to{
        transform:translateY(0px);
    }
`;

const slideDown = keyframes`
    from{
        transform:translateY(0px);
    }
    to{
        transform:translateY(100px); /* 상태 변화를 보기 위해 부자연스럽게 설정하였음 */
    }
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  /* animation */
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  /* 사라지기 */
  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }

  /* animation */
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  /* 사라지기 */
  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const ShortMarginButton = styled(StyledButton)`
  & + & {
    margin-left: 0.5rem;
  }
`;

function Dialog({ title, children, confirmText, cancelText, visible, onConfirm, onCancel }) {
  const [animate, setAnimate] = useState(false); //현재 애니메이션을 보여주고 있는 상태인지
  const [localVisible, setLocalVisible] = useState(visible); //현재 상태가 true에서 false로 전환되고 있는 현상을 감지

  useEffect(() => {
    //visible  true => false로 되는 시점에 특정 작업
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250); //animation-duration을 0.25초로 했으니까
    }
    setLocalVisible(visible); //visible 값이 바뀔 때마다 localVisible과 동기화
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;
  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onCancel}>
            {cancelText}
          </ShortMarginButton>
          <ShortMarginButton color="pink" onClick={onConfirm}>
            {confirmText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "확인",
};

export default Dialog;
