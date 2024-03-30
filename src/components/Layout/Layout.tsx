import {styled} from "styled-components";
import SideBar from "../SideBar/SideBar.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <LayoutStyled>
            <SideBar/>
            <Outlet/>
        </LayoutStyled>
    );
};

export default Layout;

const LayoutStyled = styled.div`
display: flex;
    //width: 100%;
`;