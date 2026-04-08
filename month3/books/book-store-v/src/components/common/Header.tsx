import styled from "styled-components";
import logo from '../../assets/hero.png'
import { FaSignInAlt, FaRegUser, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";
import { useAuthStore } from "../../store/authStore";
import Dropdown from "./Dropdown";

function Header() {
    const { category } = useCategory();
    const { isLoggedIn, storeLogout } = useAuthStore();
    return(
        <HeaderStyle>
            <h1 className="logo">
                <Link to="/">
                    <img src={logo} alt="book store" />
                </Link>
            </h1>
            <nav className="category">
                <ul>
                    {category.map((item) => (
                        <li key={item.id}>
                            <Link to={item.id === null ? '/books' : `/books?category_id=${item.id}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className="auth">
                <Dropdown toggleButton={<FaUserCircle />}>
                    {
                        isLoggedIn
                        ?
                        <ul>
                            <li><Link to='/cart'>장바구니</Link></li>
                            <li><Link to='/orderlist'>주문 내역</Link></li>
                            <li><button onClick={storeLogout}>로그아웃</button></li>
                        </ul>
                        :
                        <ul>
                            <li>
                                <Link to="/login">
                                    <FaSignInAlt />로그인
                                </Link>
                            </li>
                            <li>
                                <Link to="/signup">
                                    <FaRegUser />회원가입
                                </Link>
                            </li>
                        </ul>
                    }    
                </Dropdown>
            </nav>
        </HeaderStyle>
    )
}
// styled.태그명
const HeaderStyle = styled.header`
    /* 반응형을 위해 width를 100% */
    width: 100%;
    /* 가운데 정렬 */
    margin: 0 auto;
    /* 1020px */
    max-width: ${({theme}) => theme.layout.width.large};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid${({theme}) => theme.colors.background};

    .logo {
        img {
            width: 200px;
        }
    }
    .category {
        ul{
            display: flex;
            gap: 32px;
            li{
                a{
                    font-size: 1.5rem;
                    font-weight: 600;
                    text-decoration: none;
                    color: ${({theme}) => theme.colors.text};

                    &:hover {
                        color: ${({theme}) => theme.colors.primary}
                    }
                }
            }
        }
    }
    .auth {
        ul{
            display: flex;
            gap: 16px;
            li{
                a, button{
                    font-size: 1rem;
                    font-weight: 600;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    line-height: 1;
                    background: none;
                    border: 0;
                    cursor: pointer;
                    svg {
                        margin-right: 6px;
                    }
                }
            }
        }
    }
/* 구조분해할당으로 theme 호출 */
    /* background-color: ${({theme}) => theme.colors.background};

    h1 {
        color: ${({theme}) => theme.colors.primary}
    } */
`;

export default Header;