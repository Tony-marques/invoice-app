import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import SideBar from "../SideBar/SideBar.tsx";

const Layout = () => {
  return (
    <LayoutStyled>
      <SideBar />
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;

const LayoutStyled = styled.div`
  display: flex;
`;
