import { styled } from "styled-components";

function Header() {
    return (
        <HeaderStyle>
            <h1>book store</h1>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    background-color: ${({ theme }) => theme.colors.background};

    h1 {
        ${({ theme }) => theme.colors.primary};
    }
`;

export default Header;