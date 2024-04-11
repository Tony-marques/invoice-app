import { styled } from "styled-components";
import SideBarTop from "../SideBarTop/SideBarTop.tsx";
import SideBarBottom from "../SideBarBottom/SideBarBottom.tsx";
import { useThemeContext } from "../../contexts/ThemeContext.tsx";

type SideBarStyled = {
  theme: boolean;
};

const SideBar = () => {
  const { theme } = useThemeContext();
  return (
    <SideBarStyled onClick={(e) => e.stopPropagation()} theme={theme}>
      <SideBarTop />
      <SideBarBottom />
    </SideBarStyled>
  );
};

export default SideBar;

const SideBarStyled = styled.div<SideBarStyled>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  min-width: 103px;
  background-color: ${({ theme }) => (theme === true ? "#1E2139" : "#373B53")};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  position: sticky;
  top: 0;
  left: 0;
`;
