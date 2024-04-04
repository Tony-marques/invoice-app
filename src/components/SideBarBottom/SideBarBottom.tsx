import {styled} from "styled-components";
import {
    useThemeContext
} from "../../contexts/ThemeContext.tsx";

const SideBarBottom = () => {

    const { toggleTheme} = useThemeContext()

    const handleToggleTheme = () => {
        toggleTheme()
    }

    return (
        <SideBarBottomStyled>
                <img
                    className="moon"
                    src="/assets/icon-moon.svg"
                    alt=""
                    onClick={handleToggleTheme}
                />
                <div className="separator"></div>
                <img
                    className="avatar"
                    src="/assets/image-avatar.jpg"
                    alt=""
                />
        </SideBarBottomStyled>
    );
};

export default SideBarBottom;

const SideBarBottomStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img.moon {
        width: 20px;
        height: 20px;
        margin-bottom: 32px;
        cursor: pointer;
    }

    .separator {
        border-bottom: 1px solid #494E6E;
        width: 100%;
    }

    img.avatar {
        margin: 24px 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`;