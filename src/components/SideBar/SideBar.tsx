import {styled} from "styled-components";
import SideBarTop from "../SideBarTop/SideBarTop.tsx";
import SideBarBottom
    from "../SideBarBottom/SideBarBottom.tsx";

const SideBar = () => {
    return (
        <SideBarStyled>
            <SideBarTop/>
            <SideBarBottom/>
        </SideBarStyled>
    );
};

export default SideBar;

const SideBarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100vh; 
    min-width: 103px;
    background-color: #373B53;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    position: sticky;
    top: 0;
    left: 0;
`;