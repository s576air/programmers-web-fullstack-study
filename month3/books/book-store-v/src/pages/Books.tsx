import styled from "styled-components";
import Title from "../components/common/title";
import BooksEmpty from "../components/books/BooksEmpty";
import BooksList from "../components/books/BooksList";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import BooksFilter from "../components/books/BooksFilter";
import Pagination from "../components/books/Pagination";


function Books() {
    return (
        <>
            <Title size="large">도서 검색 결과</Title>
            <BooksStyle>
                <BooksFilter />
                <BooksViewSwitcher />
                <BooksList />
                <BooksEmpty />
                <Pagination />
            </BooksStyle>
        </>
    );
}

const BooksStyle = styled.div``;

export default Books;