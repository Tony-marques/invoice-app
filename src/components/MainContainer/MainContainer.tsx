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
    border: 2px solid green;
    height: 100%;
    position: absolute;
    display: flex;
    gap: 64px;
    //justify-content: center;
    align-items: center;
    flex-direction: column;
    
    width: 100%;
`;