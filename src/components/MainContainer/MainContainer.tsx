import {styled} from "styled-components";
import FilterBar from "../FilterBar/FilterBar.tsx";
import InvoiceList from "../InvoiceList/InvoiceList.tsx";

const MainContainer = () => {
    return (
        <MainContainerStyled>
            <FilterBar/>
            <InvoiceList/>
        </MainContainerStyled>
    );
};

export default MainContainer;

const MainContainerStyled = styled.div`
    //flex-grow: grow;
    position: relative;
    display: flex;
    gap: 64px;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;