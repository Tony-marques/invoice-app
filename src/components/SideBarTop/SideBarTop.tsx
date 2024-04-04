import { styled } from "styled-components";

const SideBarTop = () => {
  return (
    <SideBareTopStyled>
      <img src="/assets/logo.svg" alt="" />
    </SideBareTopStyled>
  );
};

export default SideBarTop;

const SideBareTopStyled = styled.div`
  height: 103px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7c5dfa;
  position: relative;
  overflow: hidden;

  img {
    width: 40px;
    height: 40px;
    position: relative;
    z-index: 10;
  }

  &::after {
    content: "";
    border-top-left-radius: 20px;
    background-color: #9277ff;
    width: 103px;
    height: 103px;
    position: absolute;
    top: 50%;
  }
`;
